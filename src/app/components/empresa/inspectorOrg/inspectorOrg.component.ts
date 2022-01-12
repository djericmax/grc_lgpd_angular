import { Component, OnInit, Input } from '@angular/core';

import * as go from 'gojs';

@Component({
  selector: 'app-inspectorOrg',
  templateUrl: './inspectorOrg.component.html',
  styleUrls: ['./inspectorOrg.component.css']
})
export class InspectorOrgComponent implements OnInit {

  public _selectedNode: go.Node;
  public data = {
    name: null,
    parent: null,
    isAssistant: null
  };

  @Input()
  public model: go.Model;

  @Input()
  get selectedNode() { return this._selectedNode; }

  set selectedNode(node: go.Node) {
    if (node && node != null) {
      this._selectedNode = node;
      this.data.name = this._selectedNode.data.name;
      this.data.parent = this._selectedNode.data.parent;
      this.data.isAssistant = this._selectedNode.data.isAssistant;
    } else {
      this._selectedNode = null;
    }

  }

  
  constructor() { }

  ngOnInit() {
  }

  public onCommitForm() {
    this.model.startTransaction();
    this.model.set(this.selectedNode.data, 'name', this.data.name);
    this.model.set(this.selectedNode.data, 'parent', this.data.parent);
    this.model.set(this.selectedNode.data, 'isAssistant', this.data.isAssistant);
    this.model.commitTransaction();
  }

}
