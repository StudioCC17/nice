export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd8e41726ecae0f2d2e7265',
                  title: 'Sanity Studio',
                  name: 'nice-studio-969bwbeo',
                  apiId: 'b488e7ad-b276-4869-b5a0-6266dc13995b'
                },
                {
                  buildHookId: '5fd8e417c1c38d0d9afd9017',
                  title: 'Landing pages Website',
                  name: 'nice-web-xyejbgn4',
                  apiId: '40b72e7b-ae4b-43ee-aa78-5a42696576f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StudioCC17/nice',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nice-web-xyejbgn4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
