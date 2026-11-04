import { blogImages } from '../data/blogImages'
import { BLOG_POSTS } from '../data/content'
import { ArrowRight } from './ui'

export function Blog() {
  return (
    <section id="blog" className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 py-16 lg:px-[130px]">
        <div className="text-center">
          <h2 className="mx-auto max-w-[504px] text-heading font-medium text-ink">
            Why you need multiple marketing strategies
          </h2>
          <p className="mt-4 text-subtitle text-ink">Choose your best ecommerce store</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[25px]">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.image}
              className="flex flex-col overflow-hidden rounded-[10px] bg-surface shadow-card"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <img
                  src={blogImages[post.image]}
                  alt={post.imageAlt}
                  width={754}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-6 px-6 pb-8 pt-8">
                <div className="flex flex-col gap-4">
                  <p className="text-body font-medium leading-[27px] text-accent">{post.category}</p>
                  <h3 className="text-title font-medium text-ink">{post.title}</h3>
                  <p className="text-small leading-7 text-ink">{post.excerpt}</p>
                </div>
                <a
                  href="#blog"
                  className="mt-auto inline-flex w-fit items-center gap-4 rounded-[4px] bg-accent px-8 py-3.5 text-small font-medium text-surface-alt transition-opacity hover:opacity-90"
                >
                  Read more
                  <ArrowRight className="size-6" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
