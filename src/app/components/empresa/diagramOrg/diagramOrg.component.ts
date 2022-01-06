import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

import * as go from 'gojs';
import { Inspector } from './inspect/DataInspector';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagramOrg',
  templateUrl: './diagramOrg.component.html',
  styleUrls: ['./diagramOrg.component.css']
})
export class DiagramOrgComponent implements OnInit {
  
  
  public diagram: go.Diagram = null;
  
  @Input()
  public model: go.Model;
  
  @Output()
  public nodeClicked = new EventEmitter();
  
  
  
  public ngAfterViewInit() {
    this.diagram = $(go.Diagram, 'myDiagramDiv',
    {
      layout:
      $(go.TreeLayout,
        {
          isOngoing: true,
          treeStyle: go.TreeLayout.StyleLastParents,
          arrangement: go.TreeLayout.ArrangementHorizontal,
          // properties for most of the tree:
          angle: 90,
          layerSpacing: 35,
          // properties for the "last parents":
          alternateAngle: 90,
          alternateLayerSpacing: 35,
          alternateAlignment: go.TreeLayout.AlignmentBus,
          alternateNodeSpacing: 20
        }),
        'undoManager.isEnabled': true
      }
      );
      
      // define the Node template
      this.diagram.nodeTemplate =
      $(go.Node, 'Auto',
      
      new go.Binding('text', 'name'),
      
      new go.Binding('layerName', 'isSelected', function (sel) { return sel ? 'Foreground' : ''; }).ofObject(),
      
      $(go.Shape, 'Rectangle',
      {
        name: 'SHAPE', fill: 'lightblue', stroke: null,
        
        portId: '', fromLinkable: true, toLinkable: true, cursor: 'pointer'
      },
      new go.Binding('fill', '', function (node) {
        
        const levelColors = ['#AC193D', '#2672EC', '#8C0095', '#5133AB', '#008299', '#D24726', '#008A00', '#094AB2'];
        let color = node.findObject('SHAPE').fill;
        const dia: go.Diagram = node.diagram;
        if (dia && dia.layout.network) {
          dia.layout.network.vertexes.each(function (v: go.TreeVertex) {
            if (v.node && v.node.key === node.data.key) {
              const level: number = v.level % (levelColors.length);
              color = levelColors[level];
            }
          });
        }
        return color;
      }).ofObject()
      ),
      $(go.Panel, 'Horizontal',
      $(go.Picture,
        {
          name: 'Picture',
          desiredSize: new go.Size(39, 50),
          margin: new go.Margin(6, 8, 6, 10)
        },
        new go.Binding('source', 'key', function (key) {
          if (key < 0 || key > 40) return ''; // There are only 16 images on the server
          return 'assets/imgs/orgs/default.png';
          // return 'assets/imgs/orgs/HS' + key + '.png';
        })
        ),
        // define the panel where the text will appear
        $(go.Panel, 'Table',
        {
          maxSize: new go.Size(150, 999),
          minSize: new go.Size(150, 60),
          margin: new go.Margin(6, 10, 0, 3),
          defaultAlignment: go.Spot.Left
        },
        $(go.RowColumnDefinition, { column: 2, width: 4 }),
        $(go.TextBlock, { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },  // the name
        {
          row: 0, column: 0, columnSpan: 5,
          font: '12pt Segoe UI,sans-serif',
          editable: true, isMultiline: false,
          minSize: new go.Size(10, 16)
        },
        
        new go.Binding('text', 'name').makeTwoWay()),
        $(go.TextBlock, '', { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },
        { row: 1, column: 0 }),
        $(go.TextBlock, { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },
        {
          row: 1, column: 1, columnSpan: 4,
          editable: true, isMultiline: false,
          minSize: new go.Size(10, 14),
          margin: new go.Margin(0, 0, 0, 3)
        },
        
          new go.Binding('text', 'title').makeTwoWay()),
        $(go.TextBlock, { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },
        { row: 2, column: 0 },
        
          new go.Binding('text', 'key', function (v) { return 'ID: ' + v; })),
        $(go.TextBlock, { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },
        { name: 'boss', row: 2, column: 3 }, // we include a name so we can access this TextBlock when deleting Nodes/Links
        
          new go.Binding('text', 'parent', function (v) { return 'Boss: ' + v; })),
        $(go.TextBlock, { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },  // the comments
        {
          row: 3, column: 0, columnSpan: 5,
          font: 'italic 9pt sans-serif',
          wrap: go.TextBlock.WrapFit,
          editable: true,  // by default newlines are allowed
          minSize: new go.Size(10, 14)
        },
        
        // -----------------------
        new go.Binding('text', 'isAssistant', function (v) { return 'isAssistant: ' + v; })),
        $(go.TextBlock, { font: '9pt  Segoe UI,sans-serif', stroke: 'white' },
        { name: 'isAssistant', row: 2, column: 3 }, // we include a name so we can access this TextBlock when deleting Nodes/Links
        // -----------------------
        
        new go.Binding('text', 'comments').makeTwoWay()),
        )  // end Table Panel
        ), // end Horizontal Panel
        );  // end Node
        
        
        
        this.diagram.linkTemplate =
        
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, relinkableFrom: true, relinkableTo: true },
          $(go.Shape, { strokeWidth: 4, stroke: "#00a4a4" }));  // the link shape
          
          // support editing the properties of the selected person in HTML
          if (Inspector !== null) new Inspector("myInspector", this.diagram,
            {
              properties: {
                "key": { readOnly: true },
                "comments": {},
                "isAssistant": { type: "boolean" }
              },
              propertyModified: function (name, val) {
                if (name === "isAssistant") this.diagram.layout.invalidateLayout();
              }
            });
          
          // // Setup zoom to fit button
          // document.getElementById('zoomToFit').addEventListener('click', function() {
          //   myDiagram.commandHandler.zoomToFit();
          // });
          
          // document.getElementById('centerRoot').addEventListener('click', function() {
          //   myDiagram.scale = 1;
          //   myDiagram.commandHandler.scrollToPart(myDiagram.findNodeForKey(1));
          // });
          
          
          
          
          
          
          
          
          
          this.diagram.model = this.model;
          
          // when the selection changes, emit event to app-component updating the selected node
          this.diagram.addDiagramListener('ChangedSelection', (e) => {
            const node = this.diagram.selection.first();
            this.nodeClicked.emit(node);
          });
        }
        
        
        constructor() { }
        
        ngOnInit() {
        }
        
        
        
        
        
        save() {
          document.getElementById("mySavedModel").nodeValue = this.diagram.model.toJson();
          this.diagram.isModified = false;
        }
        
        load() {
          this.diagram.model = go.Model.fromJson(document.getElementById("mySavedModel").nodeValue);
          var lastkey = 1;
          this.diagram.model.makeUniqueKeyFunction = function (model, data) {
            var k = data.key || lastkey;
            while (model.findNodeDataForKey(k)) k++;
            data.key = lastkey = k;
            return k;
          };
        }
  
        click(e, obj) {
          // remove the whole subtree, including the node itself
          var node = obj.part.adornedPart;
          if (node !== null) {
            this.diagram.startTransaction("toggle assistant");
            this.diagram.model.setDataProperty(node.data, "isAssistant", !node.data.isAssistant);
            this.diagram.layout.invalidateLayout();
            this.diagram.commitTransaction("toggle assistant");
          }
        }
        
        
        isAssistant(n) {
          if (n === null) return false;
          return n.data.isAssistant;
        }
        
        
        
        SideTreeLayout() {
          go.TreeLayout.call(this);
        }
        
        
        
        
        
        
        
        
        
        // gojs
        
        // gojs
        
      }