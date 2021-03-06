import '../../app/App.css';

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BreadthFirstGraph } from './graphs/BreadthFirstGraph';
import { ColaGraph } from './graphs/ColaGraph';
import { CoseGraph } from './graphs/CoseGraph';
import { KlayGraph } from './graphs/KlayGraph';
import { DagreGraph } from './graphs/DagreGraph';

const bookinfoData = require('./__stories__/bookinfo.json');

import CytoscapeLayout from './CytoscapeLayout';
const EMPTY_GRAPH = { nodes: [], edges: [] };

// For some reason, when running a storybook of CytoscapeLayout, we get a weird
// issue, when we hover, everything dissapears unless we manually resize the window
// or call resize on cy
class CytoscapeLayoutStorybook extends CytoscapeLayout {
  componentDidMount() {
    super.componentDidMount();
    if (this.cy) {
      this.cy.resize();
    }
  }
}

const BookInfoCytoscapeLayout = graphLayout => (
  <CytoscapeLayoutStorybook
    onReady={action('onReady')}
    graphLayout={graphLayout.getLayout()}
    namespace={{ name: 'test' }}
    graphDuration={{ value: 60 }}
    elements={bookinfoData}
    onClick={action('OnClick')}
    isLoading={false}
    refresh={action('refresh')}
  />
);

storiesOf('CytoscapeLayout/Bookinfo with layout', module)
  .add('Dagre', () => BookInfoCytoscapeLayout(DagreGraph))
  .add('BreadthFirstGraph', () => BookInfoCytoscapeLayout(BreadthFirstGraph))
  .add('ColaGraph', () => BookInfoCytoscapeLayout(ColaGraph))
  .add('CoseGraph', () => BookInfoCytoscapeLayout(CoseGraph))
  .add('KlayGraph', () => BookInfoCytoscapeLayout(KlayGraph));

storiesOf('CytoscapeLayout', module)
  .add('Empty layout', () => (
    <CytoscapeLayoutStorybook
      onReady={action('onReady')}
      graphLayout={DagreGraph.getLayout()}
      namespace={{ name: 'test' }}
      graphDuration={{ value: 60 }}
      elements={EMPTY_GRAPH}
      onClick={action('OnClick')}
      isLoading={false}
      refresh={action('refresh')}
    />
  ))
  .add('Loading', () => (
    <CytoscapeLayoutStorybook
      onReady={action('onReady')}
      graphLayout={DagreGraph.getLayout()}
      namespace={{ name: 'test' }}
      graphDuration={{ value: 60 }}
      elements={EMPTY_GRAPH}
      onClick={action('OnClick')}
      isLoading={true}
      refresh={action('refresh')}
    />
  ));
