import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation  } from '@angular/core';

import * as go from 'gojs';
import { Inspector } from './inspect/DataInspector';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagramOrg',
  templateUrl: './diagramOrg.component.html',
  styleUrls: ['./diagramOrg.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagramOrgComponent implements OnInit {
  
  modo: number;
  selectedModo: any;
  modos: any = [
    { id: 1, modo: 'Light',  status: 'ok' },
    { id: 2, modo: 'Dark',   status: 'ok' },
  ];
  
  public myDiagram : go.Diagram = null;
  
  @Input()
  public model: go.Model;
  
  @Output()
  public nodeClicked = new EventEmitter();
  
  AlteraLayout(id) {
    this.modo = parseInt(id);
    console.log(this.modo)
  }
  
  public ngAfterViewInit() {
     this.modo = 1;
    console.log(this.modo);
    
    this.myDiagram =
    
    $(go.Diagram, "myDiagramDiv",
    {
      maxSelectionCount: 1, 
      validCycle: go.Diagram.CycleDestinationTree, 
      "clickCreatingTool.archetypeNodeData": {
        name: "Novo nome",
        title: "Novo Cargo",
        comments: ""
      },
      "clickCreatingTool.insertPart": function(loc) {
        var node = go.ClickCreatingTool.prototype.insertPart.call(this, loc);
        if (node !== null) {
          this.diagram.select(node);
          this.diagram.commandHandler.scrollToPart(node);
          this.diagram.commandHandler.editTextBlock(node.findObject("NAMETB"));
        }
        return node;
      },
      layout:
      $(go.TreeLayout,
        {
          isOngoing: true,
          treeStyle: go.TreeLayout.StyleLastParents, // StyleLastParents,
          arrangement: go.TreeLayout.ArrangementFixedRoots, // ou pode usar ArrangementHorizontal ou ArrangementVertical
          angle: 90,    // angulo dos quadros, obrigatório a ser 90.
          layerSpacing: 35, // tamanho da linha a cima de alguns quadros.
          alternateAngle: 90, // ângulo da linha adicionando quadros abaixo.
          alternateLayerSpacing: 35, // tamanho da linha vertical entre alguns quadros.
          alternateAlignment: go.TreeLayout.AlignmentCenterChildren,// alinhamentos dos quadros,
          alternateNodeSpacing: 20 // tamanho da linha horizontal entre os quadros.
        }),
        "undoManager.isEnabled": true // enable undo & redo.
      });
      
      
      
      
      
      
      // // manage boss info manually when a node or link is deleted from the diagram
      //   this.myDiagram.addDiagramListener("SelectionDeleting", function(e) {
      //     var part = e.subject.first(); // e.subject is the myDiagram.selection collection,
      
      //     // so we'll get the first since we know we only have one selection
      //     this.myDiagram.startTransaction("clear boss");
      //     if (part instanceof go.Node) {
      //       var it = part.findTreeChildrenNodes(); // find all child nodes
      //       while (it.next()) { // now iterate through them and clear out the boss information
      //         var child = it.value;
      //         var bossText = child.findObject("boss"); // since the boss TextBlock is named, we can access it by name
      //         if (bossText === null) return;
      //         bossText.diagram.add.prototype.text = "";
      //       }
      //     } else if (part instanceof go.Link) {
      //       var child = part.toNode;
      //       var bossText = child.findObject("boss"); // since the boss TextBlock is named, we can access it by name
      //       if (bossText === null) return;
      //       bossText.diagram.add.prototype.text = "";
      //     }
      //     this.myDiagram.commitTransaction("clear boss");
      //   });
      
      
      
      
      var levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB",
      "#008299", "#D24726", "#008A00", "#094AB2"];
      
      // override TreeLayout.commitNodes to also modify the background brush based on the tree depth level
      this.myDiagram.layout.diagram.add.prototype.commitNodes = function() {
        go.TreeLayout.prototype.diagram.add.prototype.commitNodes.call(this.myDiagram.layout);  // do the standard behavior
        // then go through all of the vertexes and set their corresponding node's Shape.fill
        // to a brush dependent on the TreeVertex.level value
        this.myDiagram.layout.network.vertexes.each(function(v) {
          if (v.node) {
            var level = v.level % (levelColors.length);
            var color = levelColors[level];
            var shape = v.node.findObject("SHAPE");
            if (shape) shape.stroke = $(go.Brush, "Linear", { 0: color, 1: go.Brush.lightenBy(color, 0.05), start: go.Spot.Left, end: go.Spot.Right });
          }
        });
      };
      
      
      
      // when a node is double-clicked, add a child to it
      function nodeDoubleClick(e, obj) {
        var clicked = obj.part;
        if (clicked !== null) {
          var thisemp = clicked.data;
          this.myDiagram.startTransaction("add employee");
          var newemp = {
            name: "(new person)",
            title: "",
            comments: "",
            parent: thisemp.key
          };
          this.myDiagram.model.addNodeData(newemp);
          this.myDiagram.commitTransaction("add employee");
        }
      }
      
      
      
      
      
      
      
      
      // define the Node template
      this.myDiagram.nodeTemplate =
      $(go.Node, 'Auto',
      
      { doubleClick: nodeDoubleClick },
      
      { // handle dragging a Node onto a Node to (maybe) change the reporting relationship
        mouseDragEnter: function(e, node, prev) {
          var diagram = node.diagram;
          var selnode = diagram.selection.first();
          if (!diagram.add.prototype.mayWorkFor(selnode, node)) return;
          var shape = node.diagram.add.prototype.findObject("SHAPE");
          if (shape) {
            shape._prevFill = shape.fill;  // remember the original brush
            shape.fill = "darkred";
          }
        },
        
        // mouseDragLeave: function(e, node, next) {
        //   var shape = node.diagram.add.prototype.findObject("SHAPE");
        //   if (shape && shape._prevFill) {
        //     shape.fill = shape._prevFill;  // restore the original brush
        //   }
        // },
        
        mouseDrop: function(e, node) {
          var diagram = node.diagram;
          var selnode = diagram.selection.first();  // assume just one Node in selection
          if (diagram.add.prototype.mayWorkFor(selnode, node)) {
            // find any existing link into the selected node
            var link = selnode.add.prototype.findTreeParentLink();
            if (link !== null) {  // reconnect any existing link
              link.fromNode = node;
            } else {  // else create a new link
              diagram.toolManager.linkingTool.insertLink(
                diagram.add.prototype.node,
                diagram.add.prototype.node.port,
                diagram.add.prototype.selnode,
                diagram.add.prototype.selnode.port);
              }
            }
          }
        },
        
        
        
        new go.Binding('text', 'name'),
        
        new go.Binding('layerName', 'isSelected', function (sel) { return sel ? 'Foreground' : ''; }).ofObject(),
        
        $(go.Shape, 'Rectangle',
        {
          name: 'SHAPE', fill: '#fff', stroke: '#333', strokeWidth: 3.5,
          
          portId: '', fromLinkable: true, toLinkable: true, cursor: 'pointer'
        },
        
        new go.Binding('fill', '', function (node) {
          
          const levelColors = ['#AC193D', '#2672EC', '#8C0095', '#5133AB', '#008299', '#D24726', '#008A00', '#094AB2'];
          let color = node.findObject('SHAPE').fill;
          const dia: go.Diagram = node.diagram;
          
          
          if (dia && dia.layout.network) {
            dia.layout.network.vertexes.each(function (v: go.TreeVertex) {
              
                // ----------------- Quadro todo colorido -------------------------
                // if (v.node && v.node.key === node.data.key) {
                  //   const level: number = v.level % (levelColors.length);
                  //   color = levelColors[level];
                  //   var shape = node.findObject("SHAPE");
                  //   if (shape) shape.stroke = $(go.Brush, "Linear", { 0: color, 1: go.Brush.lightenBy(color, 0.05), start: go.Spot.Left, end: go.Spot.Right });
                  // }
                  // ----------------- Quadro todo colorido -------------------------
                
                // ----------------- Apenas bordas coloridas -------------------------
                if (v.node && v.node.key === node.data.key) {
                  var level = v.level % (levelColors.length);
                  var color = levelColors[level];
                  var shape = node.findObject("SHAPE");
                  if (shape) shape.stroke = $(go.Brush, "Linear", { 0: color, 1: go.Brush.lightenBy(color, 0.05), start: go.Spot.Left, end: go.Spot.Right });
                }
                // ----------------- Apenas bordas coloridas -------------------------
                
              
            });
          }
          return color;
          
          
          
          
          
        }).ofObject()
        
        
        ),
        
        $(go.Panel, 'Horizontal', // Posição do texto relativo a figura (Vertical a figura fica em cima, Horizontal a figura fica ao lado)
        
        // ------------ Figura do quadro -------------
        $(go.Picture,
          {
            name: 'Picture',
            desiredSize: new go.Size(47, 47),
            margin: new go.Margin(6, 8, 6, 10)
          },
          new go.Binding('source', 'key', function (key) {
            if (key < 0 || key > 40) return '';
            // return 'assets/imgs/orgs/default.png';
            return 'assets/imgs/orgs/HS' + key + '.png';
          }) ),
          // ------------ Figura do quadro -------------
          
          
          // ------------ definição do painel do organograma -------------
          $(go.Panel, 'Table',
          {
            maxSize: new go.Size(150, NaN),
            minSize: new go.Size(150, NaN),
            margin: new go.Margin(6, 10, 0, 3),
            defaultAlignment: go.Spot.TopLeft
          },
          // ------------ definição do painel do organograma -------------
          
          $(go.RowColumnDefinition, { column: 3, width: 5 }),
          
          // ------------------- Title do quadro -------------------
          $(go.TextBlock, this.textStyleTitle(),
          {
            row: 0, column: 0, columnSpan: 4,
            editable: false,
            isMultiline: false,
            minSize: new go.Size(10, 16)
          }, 
          new go.Binding('text', 'title').makeTwoWay()),
          // ------------------- Title do quadro -------------------
          
          // ------------------- Nome do quadro -------------------
          $(go.TextBlock, this.textStyleName(),  // the name
          {
            row: 1, column: 0, columnSpan: 4,
            editable: true,
            isMultiline: false,
            minSize: new go.Size(10, 14),
            margin: new go.Margin(0, 0, 0, 3)
          },
          new go.Binding('text', 'name').makeTwoWay()),
          // ------------------- Nome do quadro -------------------
          
          
          // ------------------- ID do quadro -------------------
          $(go.TextBlock, this.textStyleOthers(),
          {
            row: 2, column: 0, columnSpan: 1,
            editable: false,
            isMultiline: false,
            minSize: new go.Size(10, 14),
            margin: new go.Margin(0, 0, 0, 3)
          },
          new go.Binding('text', 'key', function (v) { return 'ID: ' + v; })),
          // ------------------- ID do quadro -------------------
          
          // ------------------- Boss do quadro -------------------
          $(go.TextBlock, this.textStyleOthers(),
          {
            row: 2, column: 1, columnSpan: 1,
            editable: true,
            isMultiline: false,
            minSize: new go.Size(10, 14),
            margin: new go.Margin(0, 0, 0, 3)
          },        
          new go.Binding('text', 'parent', function (v) { return 'Boss: ' + v; })),
          // ------------------- Boss do quadro -------------------
          
          // ------------------- Assistente do quadro -------------------
          $(go.TextBlock, this.textStyleOthers(),  // isAssistant
          {
            row: 3, column: 0, columnSpan: 5,
            editable: true,
            isMultiline: false,
            minSize: new go.Size(10, 14),
            margin: new go.Margin(0, 0, 0, 3),
            font: 'italic 9pt sans-serif',
            wrap: go.TextBlock.WrapFit,
          },
          new go.Binding('text', 'isAssistant', function (v) { if (v === true) { return 'Assistente'; }})),
          // ------------------- Assistente do quadro -------------------
          
          
          
          
          // ------------------- Comments do quadro -------------------
          // $(go.TextBlock, this.textStyleOthers(),
          // {
          //   name: 'comments', row: 4, column: 0, columnSpan: 5,
          //   font: 'italic 9pt sans-serif',
          //   wrap: go.TextBlock.WrapFit,
          //   editable: true,  // by default newlines are allowed
          //   minSize: new go.Size(10, 14)
          // },
          //   new go.Binding('text', 'comments', function (v) { return 'Comments: ' + v; })),
          // ),
          // ------------------- Comments do quadro -------------------
          
          
          )  // end Table Panel
          ), // end Horizontal Panel
          );  // end Node
          
          
          
          
          
          
          this.myDiagram.model = this.model;
          
          
          this.myDiagram.nodeTemplate.contextMenu =
          
          $("ContextMenu",
          $("ContextMenuButton",
          $(go.TextBlock, "Vacate Position"),
          {
            click: function(e, obj) {
              var node = obj.part.add.prototype.adornedPart;
              if (node !== null) {
                var thisemp = node.data;
                this.myDiagram.startTransaction("vacate");
                // update the key, name, and comments
                this.myDiagram.model.setDataProperty(thisemp, "name", "Nome Vago");
                this.myDiagram.model.setDataProperty(thisemp, "title", "Cargo");
                this.myDiagram.commitTransaction("vacate");
              }
            }
          }
          )
          ),
          
          
          
          
          
          $("ContextMenuButton",
          $(go.TextBlock, "Remove Role"),
          {
            click: function (e, obj) {
              // reparente a subárvore para o chefe deste nó e remova o nó
              var node = obj.part.add.prototype.adornedPart;
              if (node !== null) {
                this.myDiagram.startTransaction("reparent remove");
                var chl = node.findTreeChildrenNodes();
                // itere através dos filhos e defina sua chave pai para a chave pai do nosso nó selecionado
                while (chl.next()) {
                  var emp = chl.value;
                  this.myDiagram.model.setParentKeyForNodeData(emp.data, node.findTreeParentNode().data.key);
                }
                // e agora remova o próprio nó selecionado
                this.myDiagram.model.removeNodeData(node.data);
                this.myDiagram.commitTransaction("reparent remove");
              }
            }
          }
          ),
          
          
          
          $("ContextMenuButton",
          $(go.TextBlock, "Remove Department"),
          {
            click: function (e, obj) {
              // remove the whole subtree, including the node itself
              var node = obj.part.add.prototype.adornedPart;
              if (node !== null) {
                this.myDiagram.startTransaction("remove dept");
                this.myDiagram.removeParts(node.findTreeParts());
                this.myDiagram.commitTransaction("remove dept");
              }
            }
          }
          ),
          
          
          
          
          $("ContextMenuButton",
          $(go.TextBlock, "Toggle Assistant"),
          {
            click: function (e, obj) {
              // remove the whole subtree, including the node itself
              var node = obj.part.add.prototype.adornedPart;
              if (node !== null) {
                this.myDiagram.startTransaction("toggle assistant");
                this.myDiagram.model.setDataProperty(node.data, "isAssistant", !node.data.isAssistant);
                this.myDiagram.layout.invalidateLayout();
                this.myDiagram.commitTransaction("toggle assistant");
              }
            }
            
          }
          );
          
          
          this.myDiagram.linkTemplate =
          
          $(go.Link, go.Link.Orthogonal,
            { corner: 5, relinkableFrom: true, relinkableTo: true },
            $(go.Shape, { strokeWidth: 1, stroke: "#555" }));  // the link shape
            
            // this.load();
            
            if (Inspector !== null) new Inspector("myInspector", this.myDiagram,
            {
              properties: {
                "key": { readOnly: true },
                "isAssistant": { type: "boolean" },
                "comments": {},
              },
              propertyModified: function (name, val) {
                if (name === "isAssistant") this.myDiagram.layout.invalidateLayout();
              }
            });
            
            
            // this.zoomToFit();
            // this.centerRoot();
            
            // gojs
            function isAssistant(n) {
              if (n === null) return false;
              return n.data.isAssistant;
            }
            
            function SideTreeLayout() {
              go.TreeLayout.call(this);
            }
            
            go.Diagram.inherit(SideTreeLayout, go.TreeLayout);
            
            SideTreeLayout.prototype.makeNetwork = function (coll) {
              
              var net = go.TreeLayout.prototype.makeNetwork.call(this, coll);
              
              var vertexcoll = new go.Set(/*go.TreeVertex*/);
              
              vertexcoll.addAll(net.vertexes);
              
              for (var it = vertexcoll.iterator; it.next();) {
                var parent = it.value;
                
                var acount = 0;
                var ait = it.all.arguments.destinationVertexes;
                // var ait = it.all.prototype.destinationVertexes;
                
                while (ait.next()) {
                  if (isAssistant(ait.value.node)) acount++;
                }
                
                if (acount > 0) {
                  
                  var asstedges = new go.Set(/*go.TreeEdge*/);
                  var childedges = new go.Set(/*go.TreeEdge*/);
                  var eit = it.all.arguments.destinationEdges;
                  while (eit.next()) {
                    var e = eit.value;
                    if (isAssistant(e.toVertex.node)) {
                      asstedges.add(e);
                    } else {
                      childedges.add(e);
                    }
                  }
                  
                  // primeiro remova todas as arestas de PARENT
                  eit = asstedges.iterator;
                  while (eit.next()) { it.all.arguments.deleteDestinationEdge(eit.value); }
                  eit = childedges.iterator;
                  while (eit.next()) { it.all.arguments.deleteDestinationEdge(eit.value); }
                  // se o número de assistentes for ímpar, adicione um assistente fictício, para tornar a contagem par
                  if (acount % 2 == 1) {
                    var dummy = net.createVertex();
                    net.addVertex(dummy);
                    net.linkVertexes(it.all.arguments, dummy, asstedges.first());
                  }
                  // agora o PARENT deve pegar todos os filhos assistentes
                  eit = asstedges.iterator;
                  while (eit.next()) {
                    it.all.arguments.addDestinationEdge(eit.value);
                  }
                  //crie um vértice substituto para ser o novo PARENT de todos os CHILDREN regulares
                  var subst = net.createVertex();
                  net.addVertex(subst);
                  // repare CHILDREN regulares para o novo vértice substituto
                  eit = childedges.iterator;
                  while (eit.next()) {
                    var ce = eit.value;
                    ce.fromVertex = subst;
                    subst.addDestinationEdge(ce);
                  }
                  // finalmente pode adicionar o vértice substituto como o filho ímpar final,
                  // para ser posicionado no final da subárvore imediata do PARENT.
                  var newedge = net.linkVertexes(parent, subst, null);
                }
              }
              return net;
            };
            
            SideTreeLayout.prototype.assignTreeVertexValues = function(v) {
              // se um vértice tiver algum assistente, use o alinhamento do barramento
              var any = false;
              var children = v.children;
              for (var i = 0; i < children.length; i++) {
                var c = children[i];
                if (isAssistant(c.node)) {
                  any = true;
                  break;
                }
              }
              if (any) {
                // este é o PARENT do(s) assistente(s)
                v.alignment = go.TreeLayout.AlignmentBus;  // isso é necessário
                v.nodeSpacing = 50; // controlar a distância dos assistentes dos principais links do PARENT
              } else if (v.node == null && v.childrenCount > 0) {
                // encontrou o PARENT substituto para CHILDREN não assistentes
                // v.alignment = go.TreeLayout.AlignmentCenterChildren;
                // v.breadthLimit = 3000;
                v.layerSpacing = 0;
              }
            };
            
            SideTreeLayout.prototype.commitLinks = function() {
              go.TreeLayout.prototype.arrangeTrees.call(this);
              // certifique-se de que o segmento do meio de um link ortogonal não cruze a subárvore assistente
              var eit = this.network.edges.iterator;
              while (eit.next()) {
                var e = eit.value;
                if (e.link == null) continue;
                var r = e.link;
                // essa aresta vem de um vértice pai substituto?
                var subst = e.fromVertex;
                if (subst.node == null && r.routing == go.Link.Orthogonal) {
                  r.updateRoute();
                  r.startRoute();
                  // segmento médio vai do ponto 2 ao ponto 3
                  var p1 = subst.center;  // suponha que o vértice artificial tenha tamanho zero
                  var p2 = r.getPoint(2).copy();
                  var p3 = r.getPoint(3).copy();
                  var p5 = r.getPoint(r.pointsCount - 1);
                  var dist = 10;
                  if (subst.angle == 270 || subst.angle == 180) dist = -20;
                  if (subst.angle == 90 || subst.angle == 270) {
                    p2.y = p5.y - dist; // (p1.y+p5.y)/2;
                    p3.y = p5.y - dist; // (p1.y+p5.y)/2;
                  } else {
                    p2.x = p5.x - dist; // (p1.x+p5.x)/2;
                    p3.x = p5.x - dist; // (p1.x+p5.x)/2;
                  }
                  r.setPoint(2, p2);
                  r.setPoint(3, p3);
                  r.commitRoute();
                }
              }
              
            };  // end of SideTreeLayout
            
            
            // gojs
            
            
            // quando a seleção muda, emite um evento para o componente do aplicativo atualizando o nó selecionado
            this.myDiagram.addDiagramListener('ChangedSelection', (e) => {
              const node = this.myDiagram.selection.first();
              this.nodeClicked.emit(node);
            });
          }
          
          
          constructor() { }
          
          ngOnInit() {
           
          }
          
          
          textStyleTitle() {
            return { font: "12pt  Segoe UI,sans-serif", stroke: "#333" };
          }
          textStyleName() {
            return { font: "8pt  Segoe UI,sans-serif", stroke: "#333" };
          }
          textStyleOthers() {
            return { font: "9pt  Segoe UI,sans-serif", stroke: "#333" };
          }
          
          zoomToFit() {
            document.getElementById('zoomToFit').addEventListener('click', function () {
              if (null) {
                
              }
              this.DOCUMENT_NODE.valueOf.prototype.commandHandler.zoomToFit();
            });
          }
          
          centerRoot() {
            document.getElementById('centerRoot').addEventListener('click', function() {
              this.DOCUMENT_NODE.valueOf.prototype.scale = 1;
              this.DOCUMENT_NODE.valueOf.prototype.commandHandler.scrollToPart(this.DOCUMENT_NODE.valueOf.prototype.findNodeForKey(1));
            });
          }
          
          
          save() {
            document.getElementById("mySavedModel").nodeValue = this.myDiagram.model.toJson();
            this.myDiagram.isModified = false;
          }
          
          load() {
            this.myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").nodeValue);
            var lastkey = 1;
            this.myDiagram.model.makeUniqueKeyFunction = function (model, data) {
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
              this.myDiagram.startTransaction("toggle assistant");
              this.myDiagram.model.setDataProperty(node.data, "isAssistant", !node.data.isAssistant);
              this.myDiagram.layout.invalidateLayout();
              this.myDiagram.commitTransaction("toggle assistant");
            }
          }
          
          
          
          
          
        }