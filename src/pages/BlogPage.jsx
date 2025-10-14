import {useParams} from "react-router";
import {useArticleById} from "../features/articles/useArticlebyId.jsx";
import {authorImage} from "../assets/img/index.jsx";
import PageMeta from "../ui/PageMeta.jsx";

function BlogPage(props) {

    const {url} = useParams();
    const {data: article, isPending, error} = useArticleById(url)


    return (
        <>
            {!isPending && article && (
                <PageMeta
                    title={`${article.title} | Blog – Oleksandr Petryshyn`}
                    description={article.description || 'Przeczytaj najnowszy wpis na blogu o fotografii i sztuce produktu.'}
                    ogType="article"
                    ogUrl={`https://alexlikenew.pl/blog/${article.url}`}
                    ogImage={article.image || 'https://alexlikenew.pl/default-og-image.jpg'}
                    canonical={`https://alexlikenew.pl/blog/${article.url}`}
                />
            )}


            {isPending ? 'Loading...' : <div className="w-full sm:mt-20 md:mt-32 lg:mt-40 sm:mb-20 lg:mb-40">
                <div className="container">
                    <header className="sm:grid-cols-1 lg:grid-cols-[60%_35%] sm:justify-center lg:justify-between grid">
                        <div className="flex flex-col">
                            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">{article.title}</h1>
                            <p className="sm:mt-2 sm:mb-2 lg:mt-4 lg:mb-4">{article.content}</p>
                            <div className="flex sm:gap-2 lg:gap-3 items-center sm:mb-2 lg:mb-4">
                                <div className="text-sm bg-tertiary px-2 py-1 text-primary">{article.category}</div>
                                <div className="text-sm">{article.readingTime}</div>
                            </div>

                        </div>
                        <img loading="lazy" className="w-full sm:mt-4 lg:mt-0" src={article.image_url} alt={article.title}
                             title={article.title}/>

                    </header>
                    <div className="sm:grid-cols-1 lg:grid-cols-[70%_25%] sm:justify-center lg:justify-between grid">
                        <div className="flex flex-col sm:gap-6 lg:gap-12">
                            <div className="blog__content--full"
                                 dangerouslySetInnerHTML={{__html: article.content_full ? article.content_full : ''}}
                            />
                            <div className="flex sm:gap-2 lg:gap-4">
                                <img src={authorImage} className="sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full object-cover" alt=""/>

                                <div className="flex flex-col">
                                    <span>{article.author}</span>
                                    <span
                                        className="text-sm opacity-50">Update on: {new Date(article.createdDate).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}</span>
                                </div>
                            </div>

                        </div>
                        <aside className="flex flex-col sm:mt-4 lg:mt-8">
                            <div>W tym artykule:</div>
                            <ul className="flex flex-col article__header__list gap-1"></ul>
                        </aside>
                    </div>
                </div>
            </div>}

        </>

    );
}


export default BlogPage;