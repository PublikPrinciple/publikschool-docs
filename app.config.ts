export default defineAppConfig({
  docus: {
    title: 'Publik School CIVIK Hackathons',
    description: 'Operational handbook for planning and delivering CIVIK hackathons within the CivikStack ecosystem.',
    socials: {
      github: 'publikwork/publikschool-docs'
    },
    layout: {
      fluid: false
    },
    header: {
      logo: {
        light: '/logo-light.svg',
        dark: '/logo-dark.svg'
      },
      title: 'Publik School Docs',
      showLinkIcon: true
    },
    footer: {
      credits: {
        text: 'Publik School',
        icon: 'ph:heart',
        href: 'https://publik.work'
      }
    },
    navigation: {
      links: [
        { label: 'Overview', to: '/overview/intro' },
        { label: 'Formats', to: '/formats/one_day_sprint' },
        { label: 'Roles', to: '/roles/lead_facilitator' },
        { label: 'Agendas', to: '/agendas/48h_run_of_show' },
        { label: 'Checklists', to: '/checklists/t_minus_30_days' },
        { label: 'Consent & Attribution', to: '/consent_attribution/consent_policy' },
        { label: 'Venue Kit', to: '/venue_kit/room_spec' },
        { label: 'Equity & Access', to: '/equity_access/language_access' },
        { label: 'Measurement', to: '/measurement/metrics_kpis' },
        { label: 'Templates', to: '/templates/sponsor_brief_template' }
      ]
    }
  }
})
