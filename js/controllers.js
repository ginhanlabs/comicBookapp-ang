/* todos */
/* correct way to do select change */
/* validation on form */
/* editable row - repopulate form */
/* save data via form */
/* chart updating */
/* search on details */
/* update Collection section */
/* update most collected Section */
/* update most valuable */

var PublisherList = [
    {"id": 1, "publisherId": 1, "publisherName": "Marvel"},
    {"id": 2, "publisherId": 2, "publisherName": "DC"},
    {"id": 3, "publisherId": 3, "publisherName": "Image"}
];

var TitlesList = [
    {"id": 1, "titleId": 1, "publisherId": 1, "title": "Amazing Spider-man and friends",
        "Issues":[
             {"Issue": 1, "Price": 1.99, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 2, "Price": 2.22, "Qty": 1, "Condition": "Good", "Value": .75, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 3, "Price": 3.33, "Qty": 1, "Condition": "Good", "Value": 3.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 4, "Price": 4.44, "Qty": 1, "Condition": "Good", "Value": 1.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 5, "Price": 5.55, "Qty": 1, "Condition": "Good", "Value": 2.00, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 6, "Price": 6.66, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 10, "Price": 7.77, "Qty": 1, "Condition": "Fine", "Value": .75, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 12, "Price": 8.88, "Qty": 1, "Condition": "Good", "Value": 1.00, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 16, "Price": 9.99, "Qty": 2, "Condition": "Fine", "Value": 2.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
              {"Issue": 14, "Price": 10.11, "Qty": 1, "Condition": "Good", "Value": 1.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 15, "Price": 11.22, "Qty": 1, "Condition": "Good", "Value": 2.00, "Box": 1, "Notes": "", "MMYY": "01/2013" },
             {"Issue": 22, "Price": 12.33, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
              {"Issue": 34, "Price": 13.49, "Qty": 1, "Condition": "Good", "Value": 1.99, "Box": 1, "Notes": "", "MMYY": "01/2013" },
               {"Issue": 15, "Price": 14.59, "Qty": 1, "Condition": "Good", "Value": 2.00, "Box": 1, "Notes": "", "MMYY": "01/2013" },
            {"Issue": 106, "Price":15.69, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "MMYY": "01/2013" }
         ]},
    {"id": 2, "titleId": 2, "publisherId": 1, "title": "Mighty Thor",
         "Issues":[
             {"Issue": 1, "Price": 2.99, "Qty": 1, "Condition": "Poor", "Value": 500, "Box": 11, "Notes": "" , "MMYY": "01/2013"}
         ]},
    {"id": 3, "titleId": 3, "publisherId": 2, "title": "Batman"},
    {"id": 4, "titleId": 4, "publisherId": 3, "title": "Savage Dragon"},
    {"id": 5, "titleId": 5, "publisherId": 2, "title": "Teen Titans"},
    {"id": 6, "titleId": 6, "publisherId": 2, "title": "Blue Beetle"},
    {"id": 7, "titleId": 7, "publisherId": 1, "title": "Captain America"},
    {"id": 8, "titleId": 8, "publisherId": 1, "title": "Avengers"},
    {"id": 9, "titleId": 9, "publisherId": 3, "title": "Spawn"}
];

angular.module('cbInv.controllers', []).
    controller('CBInvHomeCtrl', ['$scope', function($scope) {
    $scope.publishers = PublisherList;
    $scope.titles = TitlesList;
    $scope.master= {};
    $scope.newComicList = [];
    
    var idx = 0;
    

    $scope.setPublisher = function(_pub) {
        $scope.pubName = _pub.publisherName;
     //   $scope.pName = $scope.pubName;

    };

    $scope.setTitle = function(_title) {
        $scope.title = _title.title;
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
    
    $scope.open = function() {
        $scope.shouldBeOpen = true;
    };

    $scope.close = function() {
        $scope.reset();
        $scope.closeMsg = 'I was closed at: ' + new Date();
        $scope.shouldBeOpen = false;
    };

    $scope.opts = {
        backdropFade: true,
        dialogFade: true
    };
     
//        $scope.update = function(user) {
//          $scope.master= angular.copy(newTitle);
//        };

    $scope.reset = function() {
        /* clears from memory (scope) and then clear it from model */
      $scope.newTitle = angular.copy($scope.master);
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

    $scope.BtnNewAddComics = function() {
        var qty;
        var price;
        var newTitle = $scope.newTitle;

        if (newTitle.qty == "") {
            qty = 1;
        }
        else
            qty = newTitle.qty;

        if (newTitle.price == "") {
            price = "3.99";
        }
        else
            price = newTitle.price;

        $scope.newComicList.push({
            "idx": idx++,
            "Publisher": $scope.pubName,
            "Title": $scope.title,
            "Issue": newTitle.issue,
            "Qty": qty,
            "Price": price,
            "Condition": $scope.condition,
            "Value": newTitle.value,
            "Box": newTitle.box,
            "Notes": newTitle.notes,
            "MMYY" : newTitle.mmyy
        });
         
         $scope.reset();
    }; // end addBtn
   
        
        
    var data1 = [ 
        {
            label: "Monthly Comic Spendings",
            data: [ [2011, 450], [2012, 550], [2013, 320], [2014, 700] ],
            bars: {
                show: true,
                barWidth: 0.5,
                align: "center"
            }   
        }
            //,
//            {
//                xaxis: {
//                ticks: [
//                  [2011, "2011"],
//                  [2012, "2012"],
//                  [2013, "2013"],
//                  [2014, "2014"]
//                ]
//              }   
//            }
    ];
//        data2 = [ [[0, 4], [1, 2], [2, 4]] ],
//        curr  = 1;
    
     $scope.data = data1;

//        $scope.change = function(){ 
//            if(curr === 1){ 
//                $scope.data = data2;
//                curr = 2;
//            }else{
//                $scope.data = data1;
//                curr = 1;
//            }
//        };


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
       {field: 'Title', displayName: 'Title', width:'250px'},
       {field: 'Qty', displayName: 'Qty', width:'50px'},
       {field: 'Price', displayName: 'Price', width:'50px'},
       {field: 'Condition', displayName: 'Condition', width:'90px'},
       {field: 'Value', displayName: 'Value', width:'50px'},
       {field: 'Box', displayName: 'Box', width:'40px'},
       {field: 'MMYY', displayName: 'Date', width:'90px'},
       {field: 'Notes', displayName: 'Notes', width:'30%'}
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
    controller('CBInvDetailsCtrl', ['$scope','$routeParams', function($scope, $routeParams) {
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