/* todos */
/* call data via http or service*/
/* correct way to do select change */
/* editable row - repopulate form */
/* save data via form */
/* chart updating */
/* search on details */
/* update Collection section */
/* update most collected Section */
/* update most valuable 
 /*  add new publishers */
/* add new titles  */
//

angular.module('cbInv.controllers', []).
    controller('CBInvHomeCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        var TitlesList;
        $scope.master= {};
        $scope.newComicList = [];
        $scope.isFormValid = false;
        $scope.myVal = 33;
        $scope.pubName    = "";

        var idx = 0;

        $http.get('data/publisherData.json').success(function(cbData){
            $scope.publishers = cbData.PublisherList;
            $scope.titles = cbData.TitlesList; // contains all titles
           $scope.monthlyChartData = cbData.MonthlySpending;

        });


        $scope.setPublisher = function(_pub) {
            $scope.pubName = _pub.publisherName;
            $scope.optTitles = _.where($scope.titles, {"publisherId": $scope.selectedPub.publisherId});
        };

        $scope.setTitle = function(_title) {
            $scope.optTitle = _title.title;
        };

        $scope.setCondition = function(_condition) {
            $scope.condition = _condition;
        };

        $scope.newTitlesTotal = function() {
            var _qty = 0;
            var _total = 0;
            for (var i = 0; i < $scope.newComicList.length; i++) {
                _total = _total + (Number($scope.newComicList[i].price) * Number($scope.newComicList[i].qty));
                _qty = _qty + parseInt($scope.newComicList[i].qty);
            }
            return ("$" + _total + " on " + _qty + " titles.");
        };
//    from modal...
//    $scope.open = function() {
//        $scope.shouldBeOpen = true;
//    };
//
//    $scope.close = function() {
//        $scope.reset();
//        $scope.closeMsg = 'I was closed at: ' + new Date();
//        $scope.shouldBeOpen = false;
//    };
//
//    $scope.opts = {
//        backdropFade: true,
//        dialogFade: true
//    };

        $scope.reset = function() {
            /* clears from scope and then clear it from model */
            $scope.newBookModel = angular.copy($scope.master);
            $scope.condition = {};
            $scope.selectedCondition = 0;


            $scope.pubName ={};
            $scope.selectedPub = 0;

            $scope.title = {};
            $scope.selectedTitle = 0;
        };

        $scope.isUnchanged = function(item) {
            return angular.equals(item, $scope.master);
        };

        $scope.reset();

        $scope.BtnNewAddComics = function(_newBookModel) {

            // default values;
            var  _qty = 1;
            var  _price = "3.99";
            var _condition = "";
            var _yearMonth = "";
            var _val = "";
            var _box = "";
            var _notes = "";

            if ( !(_newBookModel.qty === undefined)) {
                _qty = _newBookModel.qty;
            };

            if (!(_newBookModel.price === undefined)) {
                _price = _newBookModel.price;
            };

            if (_newBookModel.mmyy === undefined) {
                var year = new Date().getFullYear();
                var month = new Date().getMonth();
                _yearMonth = year + "-" + month;
            }
            else
            {
                _yearMonth = _newBookModel.yyyymm;
            }

            if (!($scope.selectedCondition === undefined || $scope.selectedCondition == 0)) {
                _condition = $scope.selectedCondition;
            }

            if (!(_newBookModel.value === undefined)) {
                _val = _newBookModel.value;
            }

            if (!(_newBookModel.notes === undefined )){
                _notes = _newBookModel.notes;
            }

            if (!(_newBookModel.box === undefined )) {
                _box = _newBookModel.box;
            }

            $scope.newComicList.push({
                "idx": idx++,
                "Publisher": $scope.pubName,
                "Title": $scope.optTitle,
                "Issue": _newBookModel.issue,
                "Qty": _qty,
                "Price": _price,
                "Condition": _condition,
                "Value": _val,
                "Box": _box,
                "Notes": _notes,
                "MMYY" : _yearMonth
            });

            $scope.AddComicForm.optPublisher.$setPristine();
            $scope.AddComicForm.txtTitle.$setPristine();
            $scope.AddComicForm.txtIssue.$setPristine();

            $scope.reset();
        }; // end addBtn

        /* for chart */
        $scope.chartdata = [ $scope.monthlyChartData ];

        /* new comics added table */
//       $scope.selectedBook2 = [
//            {'Issue': '200', 'Price': '2.99', 'Qty': '1', 'Condition': 'Good', 'Value':'3.00', 'MMYY':'01/2001','Notes':'' },
//            {'Issue': '201', 'Price': '2.99', 'Qty': '1', 'Condition': 'Good', 'Value':'3.00', 'MMYY':'01/2001','Notes':''},
//            {'Issue': '200', 'Price': '2.99', 'Qty': '1', 'Condition': 'Good', 'Value':'3.00', 'MMYY':'01/2001','Notes':''}
//         ];

        $scope.RemoveNewComic = function(row){
            angular.forEach($scope.newComicList, function(data, index){
                if (data.Title == row.entity.Title && data.Issue == row.entity.Issue){
                    $scope.newComicList.splice(row.rowIndex, 1);
                }
            });
        };


        $scope.newComicsGrid = { data: 'newComicList',
//         selectedItems : [],
            multiSelect: false,
            columnDefs: [
                {field: '', displayName: ' ',width:'50px',
                    cellTemplate:  '<div class="ngCellText" ng-class="col.colIndex()" >\n\
                                <button class="btn"  ng-click="RemoveNewComic(row)" ><i class="icon-remove"></i></button>\n\
                            </div>'},
                {field: 'Issue', displayName: 'Issue', width:'50px'},
                {field: 'Title', displayName: 'Title', width:'400px'},
                {field: 'Qty', displayName: 'Qty', width:'50px'},
                {field: 'Price', displayName: 'Price', width:'50px'},
                {field: 'Condition', displayName: 'Condition', width:'90px'},
                {field: 'Value', displayName: 'Value', width:'50px'},
                {field: 'Box', displayName: 'Box', width:'40px'}

            ],
            showFilter: true,
//            showColumnMenu: true,
            pagingOptions: {
                // pageSizes: list of available page sizes.
                pageSizes: [10, 25, 50],
                //pageSize: currently selected page size.
                pageSize: 10,
                //totalServerItems: Total items are on the server.
                totalServerItems: 0,
                //currentPage: the uhm... current page.
                currentPage: 1
            },
            showFooter: true,
            enablePaging: false,
            enableColumnResize: true
        };


    }]).
    controller('CBInvDetailsCtrl', ['$scope','$http', '$routeParams',  function($scope, $http, $routeParams ) {
        /* why does the http.get not work? */
        var PublisherList = $scope.publishers;
        var TitlesList = $scope.titles;

        $scope.selectedTitle = "";
        $scope.selectedPublisher = "";
        $scope.selectedBook = [];
        $scope.detailSummary = {"totalIssues": 0, "totalPrice": 0, "totalValue": 0};

        $scope.hasDetailedListing = false;
        var bookDetail = {};

        // if ($routeParams.titleId != "" or $routeParams.titleId != undefined) {
        for (var p=0; p < PublisherList.length; p++){
            if (PublisherList[p].publisherId == $routeParams.publisherId){
                $scope.selectedPublisher = PublisherList[p].publisherName;
                break;
            }
        }

        for (var i=0; i < TitlesList.length; i++) {
            if (TitlesList[i].titleId == $routeParams.titleId){
                $scope.selectedTitle = TitlesList[i].title;
                if (TitlesList[i].Issues != undefined){
                    $scope.selectedBook = TitlesList[i].Issues;
                    // bool to show table or not
                    $scope.hasDetailedListing = true;
                    break;
                }
                else
                {
                    // needed if using ng-grid
                    // $scope.selectedBook = [ {'No issues': 'No issues' }];
                    $scope.hasDetailedListing = false;
                }
            }
        };

        // $scope.detailSummary = {"totalIssues": 50, "totalPrice": 3.99, "totalValue": 33.33};
//            $scope.detailSummary = function(){
//           
        if ($scope.hasDetailedListing) {
            var totalPrice = 0;
            var totalValue = 0;
            if ( $scope.hasDetailedListing ) {
                var numIssues = $scope.selectedBook.length;
                if (numIssues > 0){
                    $scope.detailSummary.totalIssues = numIssues;
                    for (var n=0; n < numIssues; n++){
                        totalPrice += Number($scope.selectedBook[n].Price);
                        totalValue += Number($scope.selectedBook[n].Value);
                    }
                    $scope.detailSummary.totalPrice = totalPrice.toFixed(2);
                    $scope.detailSummary.totalValue = totalValue.toFixed(2);
                }
            }
        }





    }]);