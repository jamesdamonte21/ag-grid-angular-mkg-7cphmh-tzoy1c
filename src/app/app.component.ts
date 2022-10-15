import { Component } from '@angular/core';

import {
  ColDef,
  GridReadyEvent,
  ColumnApi,
  GridApi,
  StatusPanelDef,
} from 'ag-grid-community';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultColDef = {
    resizable: true,
  };

  public sideBar = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ],
    defaultToolPanel: 'filters',
    hiddenByDefault: false,
  };

  /* ALL THE COLUMN DEFS */
  columnDefs = [
    {
      headerName: 'My Locations',
      children: [
        {
          field: 'Region',
          width: 40,
          sortable: true,
          filter: false,
          /*rowGroup: true, */
          /*hide: true, */
          suppressFiltersToolPanel: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          cellRenderer: function (params) {
            return '' + params.value + '';
          },
        },
        {
          field: 'Location',
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: 'agTextColumnFilter',
          /*    rowGroup: true, */
          /*    hide: true, */
          minWidth: 360,
          sortable: true,
          floatingFilter: true,
          cellRenderer: function (params) {
            return '<strong>' + params.value + '</strong>';
          },
        },
        {
          field: 'CompanyID',
          cellClass: 'cell-border cell-vertical-align-text-left',
          sortable: true,
          filter: 'agTextColumnFilter',
          floatingFilter: true,
        },
        {
          field: 'Address',
          sortable: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: true,
          minWidth: 360,
          cellRenderer: function (params) {
            return '<a href="#">' + params.value + '</a>';
          },
        },
        {
          field: 'Role',
          sortable: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: true,
          cellStyle: function (params) {
            if (params.value == 'Master Gatekeeper') {
              return {
                color: 'white',
                backgroundColor: 'rgb(9, 96, 114)',
              };
            }

            if (params.value == 'Gatekeeper') {
              return {
                color: '#054E5D',
                backgroundColor: 'rgb(231, 244, 247)',
              };
            }

            if (params.value == 'Other') {
              return {
                color: '#778899',
                backgroundColor: 'rgba(119, 136, 153, 0.3)',
              };
            } else {
              return null;
            }
          },
        },
        {
          field: 'Email',
          sortable: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: true,
          cellRenderer: function (params) {
            return (
              '<a href="mailto:' +
              params.value +
              '" target="_blank">' +
              params.value +
              '</a>'
            );
          },
        },
      ],
    },
  ];

  /* NOT SURE THIS IS NEEDED YET */
  rowSelection: 'single' | 'multiple' = 'multiple';

  /* INCLUDE THE STATUS BAR */
  statusBar: {
    statusPanels: StatusPanelDef[];
  } = {
    statusPanels: [
      { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
      /* { statusPanel: 'agSelectedRowCountComponent' },
      { statusPanel: 'agTotalRowCountComponent', align: 'center' },
      { statusPanel: 'agFilteredRowCountComponent' }, */

      /*  { statusPanel: 'agAggregationComponent' }, */
    ],
  };

  /* HARD CODED ROW DATA */
  rowData = [
    {
      Region: '<span class="fi fi-at"></span>',
      Location: 'Underwriters Laboratories B.V.',
      CompanyID: '1153266',
      Address: 'Westervoortsedijk 60, Arnhem 6827 AT',
      Role: 'Master Gatekeeper',
      Name: 'Bob Smith',
      Email: 'bob.smith@ullab1.com',
    },
    {
      Region: '<span class="fi fi-us"></span>',
      Location: 'UL - Underwriter Laboratories Inc.',
      CompanyID: '1480932',
      Address: '333 Pfingsten Road, Northbrook IL 60062',
      Role: 'Gatekeeper',
      Name: 'Jane Jones',
      Email: 'jane.jones@ullab2.com',
    },
    {
      Region: '<span class="fi fi-ae"></span>',
      Location: 'UL AG',
      CompanyID: '1527663',
      Address: 'Dubai Science Park, Dubai',
      Role: 'Master Gatekeeper',
      Name: 'Annie Wang',
      Email: 'annie.wang@ullab2.com',
    },
    {
      Region: '<span class="fi fi-tw"></span>',
      Location: 'UL AG, TAIWAN BRANCH',
      CompanyID: '772121',
      Address: '260 Da-Yeh Road, Taipei 112',
      Role: 'Master Gatekeeper',
      Name: 'Pam Tong',
      Email: 'pam.tog@ullab2.com',
    },
    {
      Region: '<span class="fi fi-us"></span>',
      Location: 'UNDERWRITER LABORATORIES, INC',
      CompanyID: '157893',
      Address: '333 Pfingsten Road, Northbrook IL 60062',
      Role: 'Master Gatekeeper',
      Name: 'Jenny Gomez',
      Email: 'jenny.gomez@ullab2.com',
    },
    {
      Region: '<span class="fi fi-th"></span>',
      Location: 'Underwriter Laboratories (Thailand) Limited',
      CompanyID: '1826898',
      Address: '888, Moo 5, Tambor, Samong 333',
      Role: 'Gatekeeper',
      Name: 'Brian Evans',
      Email: 'brain.evans@ullab2.com',
    },
    {
      Region: '<span class="fi fi-ca"></span>',
      Location: 'Underwriters Laboratories of Canada',
      CompanyID: '2396014',
      Address: '1040 Parsons Road SW, Edmonton T6X 0J4',
      Role: 'Gatekeeper',
      Name: 'Tom Toles',
      Email: 'tom.toles@ullab2.com',
    },
  ];
}
