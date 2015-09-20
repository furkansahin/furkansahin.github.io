var graph = {};
var edgeNodes = [];
$(function () {
    window.cy = cytoscape({
        container: $('#cy')[0],
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'text-valign': 'center',
                'color': 'white',
                'text-outline-width': 2,
                'text-outline-color': '#888',
            })
            .selector(':selected')
            .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black',
                'text-outline-color': 'black',
                'border-color': 'black',
                'border-width': 5

            })
            .selector('edge')
            .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'red',
                'source-arrow-color': 'black',
                'text-outline-color': 'black'
            })
            .selector('edge:selected')
            .css({
                'background-color': 'green',
                'line-color': 'green',
                'width': 5,
                'opacity':1,
                'color' : 'green'
            }),
        elements: {
            nodes: [],
            edges: []
        },
        layout: {
            name: 'arbor',
            refresh: 0,
            animate: true,
            infinite: true,
            ungrabifyWhileSimulating: false
        },

        ready: function(){
            var xmlObject = loadXMLDoc("sources/graph0.xml");
            var graphmlConverter = graphmlToJSON(xmlObject);
            atts = graphmlConverter.attributes;

            var cytoscapeJsGraph = {
                edges: graphmlConverter.objects[2],
                nodes: graphmlConverter.objects[1]
            };
            refreshCytoscape(cytoscapeJsGraph);
        }

    });



});

function refreshCytoscape(graphData) { // on dom ready

    cy = cytoscape({
        container: $('#cy')[0],
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'text-valign': 'center',
                'color': 'white',
                'text-outline-width': 2,
                'text-outline-color': 'white',
                'border-width': 1,
                'border-color': 'black'

            })
            .selector('#head')
            .css({
                'height': 250,
                'width': 250,
                'background-image': 'sources/images/webPic5.png',
                'border-width': 0
            })
            .selector('#facebook')
            .css({
                'height': 50,
                'width': 50,
                'background-image': 'sources/images/facebookLogo.jpg',
                'border-width': 0
            })
            .selector('#github')
            .css({
                'height': 100,
                'width': 100,
                'background-image': 'sources/images/githubLogo.png',
                'border-width': 0
            })
            .selector('#cv')
            .css({
                'height': 150,
                'width': 150,
                'background-image': 'sources/images/cv1.png',
                'border-width': 0
            })
            .selector('#linkedin')
            .css({
                'height': 90,
                'width': 90,
                'background-image': 'sources/images/LinkedInLogo.png',
                'border-width': 0
            })
            .selector('#twitter')
            .css({
                'height': 50,
                'width': 50,
                'background-image': 'sources/images/twitter.png',
                'border-width': 0
            })
            .selector('#gPlus')
            .css({
                'height': 50,
                'width': 50,
                'background-image': 'sources/images/google+.png',
                'border-width': 0
            })
            .selector('node:selected')
            .css({
                'background-color': 'black',
                'text-outline-color': 'black',
                'border-color': 'black',
                'border-width': 3,
                'opacity': 1
            })
            .selector('edge')
            .css({
                'width': 2,
                'background-color': 'black',
                'line-color': 'black',
                'color': 'black',
                'target-arrow-color': 'red',
                'source-arrow-color': 'black',
                'text-outline-color': 'black'
            })
            .selector('edge:selected')
            .css({
                'line-color': 'black',
                'width': 4,
                'opacity':1
            })
            .selector('#head-cv')
            .css({
                'width': 5,
            })
            .selector('#head-github')
            .css({
                'width': 4,
            })
            .selector('#head-facebook')
            .css({
                'width': 2,
            })
            .selector('#head-linkedin')
            .css({
                'width': 3,
            }),


        elements: {
            nodes: graphData['nodes'],
            edges: graphData['edges']

        },
        layout: {
            name: 'arbor',
            refresh: 0,
            animate: true,
            infinite: true,
            ungrabifyWhileSimulating: false
        },
        boxSelectionEnabled: true,
        motionBlur: true,
        wheelSensitivity: 0.1,
        ready: function(){
            var i = 0;
            cy.$("#cv")[0]._private.data['href'] = 'https://github.com/furkansahin/CV/raw/master/CV.pdf';
            cy.$("#facebook")[0]._private.data['href'] = 'https://www.facebook.com/sahinfurkan07';
            cy.$("#github")[0]._private.data['href'] = 'https://github.com/furkansahin';
            cy.$("#linkedin")[0]._private.data['href'] = 'https://tr.linkedin.com/in/mfsahin';
            cy.$("#twitter")[0]._private.data['href'] = 'https://twitter.com/sahinffurkan';
            cy.$("#gPlus")[0]._private.data['href'] = 'https://plus.google.com/u/0/+MehmetFurkanŞahin/posts';
            cy.on('tap', 'node', function(evt){
                if (this._private.data['id'] != 'head')
                {
                    try { // your browser may block popups
                        window.open( this.data('href') );
                    } catch(e){ // fall back on url change

                    }
                }
            });
            cy.on('mouseover', 'node', function(evt){
                if (this._private.data['id'] != 'head')
                {
                    this.style('border-width', 2);
                }
            });
            cy.on('mouseout', 'node', function(evt){
                if (this._private.data['id'] != 'head')
                {
                    this.style('border-width', 0);
                }
            });
        }
    });

}
;
