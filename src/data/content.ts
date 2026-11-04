export type NavItem = {
  label: string
  href: string
}

export type ServiceItem = {
  title: string
  description: string
}

export type Feature = {
  title: string
  description: string
}

export type Stat = {
  value: string
  label: string
}

export type ServiceSection = {
  eyebrow?: string
  title: string
  image: string
  imageAlt: string
  reverse: boolean
  features: Feature[]
}

export type BlogPost = {
  category: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Who we are', href: '#who-we-are' },
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blog', href: '#blog' },
]

export const SERVICES: ServiceItem[] = [
  { title: 'Design', description: 'Create & develope your brand' },
  { title: 'Digital Advertising', description: 'We grow your online visibility' },
  { title: 'SEO', description: 'We grow you website position' },
  { title: 'Social Media', description: 'We manage you social media' },
]

export const CLIENTS: Feature[] = [
  {
    title: 'We are commerce first',
    description: 'We are improving businesses based on our vast experience.',
  },
  {
    title: 'Our focus is on growth',
    description: 'Our main goal is to make your online store better every day.',
  },
  {
    title: 'Transparency',
    description: 'You can follow all our steps due to strategy and be a part of changes.',
  },
  {
    title: "We're experts",
    description: 'The team of experts includes business owners and advisers.',
  },
]

export const STATS: Stat[] = [
  { value: '+534%', label: 'People Reached' },
  { value: '+215%', label: 'Client Boost' },
  { value: '+801%', label: 'Company Expansion' },
  { value: '+379', label: 'Website Launch' },
]

export type ServiceBlock = {
  title: string
  features: Feature[]
  align: 'left' | 'right'
}

export const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    title: 'Good Design Increases Sales',
    align: 'left',
    features: [
      {
        title: 'Strategy and Research',
        description: 'Based on deep researching we create the best strategy due to your needs.',
      },
      {
        title: 'Development',
        description:
          'We create the best solution relying on own platforms, the experience of our partners and modern tendency.',
      },
      {
        title: 'Strategy & visual design',
        description: 'It is possible to see the future result with the prognosticate ground plan.',
      },
      {
        title: 'Conversion optimization',
        description: 'We teach your call-center team how to talk efficiently to your clients.',
      },
    ],
  },
  {
    title: 'Get More Customers with Google Ads',
    align: 'right',
    features: [
      {
        title: 'Campaign development',
        description: 'Create your unique advertisement easily without extra time or money.',
      },
      {
        title: 'Campaign launch',
        description:
          'Start your commerce with the social media announcement. Get more client without much effort.',
      },
      {
        title: 'Optimization',
        description: 'Save your money with the simple upgrades and enjoy your profit instantly.',
      },
      {
        title: 'Measurement',
        description: 'Discover the website activity with the analytics tools simply and unmistakably.',
      },
    ],
  },
  {
    title: 'Show Up when People Search for What You Sell',
    align: 'left',
    features: [
      {
        title: 'SEO audit',
        description: 'Analyze your next steps and in which way it will have impact on the selling results.',
      },
      {
        title: 'On-page SEO',
        description:
          'Optimize every word on your page for increasing the sales and reach the top of Google searching.',
      },
      {
        title: 'Targeted content',
        description: 'The targeting content helps you to push ahead less popular categories of goods.',
      },
      {
        title: 'Off-page SEO',
        description: 'This strategy helps you to increase the trust level to your online store.',
      },
    ],
  },
  {
    title: 'Grow Your Business with Social Media',
    align: 'right',
    features: [
      {
        title: 'Authentic storytelling',
        description: 'Tell your clients which were your first steps and failures in this business.',
      },
      {
        title: 'Optimized ads',
        description:
          'Optimize every word on your page for increasing the sales and reach the top of Google searching.',
      },
      {
        title: 'Community Engagement',
        description: 'Develop business with similar companies or partners.',
      },
      {
        title: 'Fostering Growth',
        description: 'The accent on social media activities increases the number of your clients.',
      },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    category: 'Marketing',
    title: 'Online marketing step by step',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.',
    image: 'blog-1',
    imageAlt: 'Laptop and phone showing a marketing dashboard',
  },
  {
    category: 'Marketing',
    title: 'Online marketing step by step',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.',
    image: 'blog-2',
    imageAlt: 'Analytics dashboard open on a laptop beside a mug',
  },
  {
    category: 'Marketing',
    title: 'Online marketing step by step',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.',
    image: 'blog-3',
    imageAlt: 'Tablet showing a design application',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.',
    name: 'Client name',
    role: 'Post',
  },
]
