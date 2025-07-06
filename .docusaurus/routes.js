import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh/markdown-page',
    component: ComponentCreator('/zh/markdown-page', '520'),
    exact: true
  },
  {
    path: '/zh/docs',
    component: ComponentCreator('/zh/docs', '746'),
    routes: [
      {
        path: '/zh/docs',
        component: ComponentCreator('/zh/docs', '1d3'),
        routes: [
          {
            path: '/zh/docs',
            component: ComponentCreator('/zh/docs', '5fc'),
            routes: [
              {
                path: '/zh/docs/strategy-indicators-reference',
                component: ComponentCreator('/zh/docs/strategy-indicators-reference', 'db2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', 'a79'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
