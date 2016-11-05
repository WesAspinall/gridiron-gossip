var IndentedTreeCtrl = function(CrimesService, PlayersService) {
  var ctrl = this;

  ctrl.categories = '';
  ctrl.incidents = [];

  ctrl.datNewNew = [];
  ctrl.merge = merge;
  ctrl.getIncidents = getIncidents;
  ctrl.getCategories = getCategories;
  ctrl.assignLabels = assignLabels;
  ctrl.activate = activate;
  activate();

  function activate() {

    getCategories();
    getIncidents();

    setTimeout(function() {
      merge();
    }, 500);

    $( '.tree li' ).each( function() {
        if( $( this ).children( 'ul' ).length > 0 ) {
            $( this ).addClass( 'parent' );     
        }
    });

    $( '.tree li.parent > a' ).click( function( ) {
        $( this ).parent().toggleClass( 'active' );
        $( this ).parent().children( 'ul' ).slideToggle( 'fast' );
    });

    $( '#all' ).click( function() {

        $( '.tree li' ).each( function() {
            $( this ).toggleClass( 'active' );
            $( this ).children( 'ul' ).slideToggle( 'fast' );
        });
    });


  }

  function getCategories() {
    CrimesService.getCrimes().then((res) => {
      ctrl.categories = res;
      return ctrl.categories;
    })
  }

  function getIncidents() {
    CrimesService.getIncidents().then((res) => {
      for (var i = 0; i < res.length; i++) {
        ctrl.incidents.push({
          label: res[i].Name + " " + "(" + res[i].arrest_count + " records" + ")"
        })
      };
      return ctrl.incidents;
    })
    console.log(ctrl.incidents);
  }

  function merge() {
    assignLabels();
    assignChildren();

    return ctrl.datNewNew;
  }

  function assignLabels() {
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.datNewNew.push({
        label: ctrl.categories[i].Category + " " + "(" + ctrl.categories[i].arrest_count + " records" + ")"
      });
    };
  }

  function assignChildren() {


    for (var i = 0; i < ctrl.datNewNew.length; i++) {
      var labels = ctrl.datNewNew[0];
      labels['children'] = ctrl.incidents;
    };

  }



  this.bag = [{
    label: 'DUI' + '(arrest_count)',
    children: [{
      label: 'Matt Prater',
      children: [{
        label: 'Arrest 1',
        children: [{
          label: 'Date: 11:slajf (9 years ago)'},
          {label: 'Name: DUI'},
          {label: 'Team: as;dflakjsf;'},
          {label: 'Description: a;dfajds;f'},
          {label: 'Outcome: a;dfajds;f'},
          {label: 'Details: a;dfajds;f'},
          {label: 'Details: a;dfajds;f'




        }],
      }],
    }, {
      label: 'Fedora'
    }, {
      label: 'Baseball'
    }, {
      label: 'Top hat'
    }, {
      label: 'Gatsby'
    }]
  }, {
    label: 'Pens',
    children: [{
      label: 'Fountain'
    }, {
      label: 'Gel ink'
    }, {
      label: 'Roller ball'
    }, {
      label: 'Fiber tip'
    }, {
      label: 'Ballpoint'
    }]
  }, {
    label: 'Whiskey',
    children: [{
      label: 'Irish'
    }, {
      label: 'Scotch'
    }, {
      label: 'Rye'
    }, {
      label: 'Tennessee'
    }, {
      label: 'Bourbon'
    }]
  }];

};

angular
  .module('components.crimes')
  .controller('IndentedTreeCtrl', IndentedTreeCtrl);