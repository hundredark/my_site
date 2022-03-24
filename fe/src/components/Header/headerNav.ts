interface navItem {
  to: string,
  title: string
}

type navList = navItem[]

export const NAV: navList = [
  {
    to: '/blogs',
    title: 'Posts'
  },
  {
    to: '/gallery',
    title: 'Gallery'
  },
  {
    to: '/about',
    title: 'About'
  }
]

