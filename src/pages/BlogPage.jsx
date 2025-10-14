
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


            {isPending ? 'Loading...' : <div className="w-full mt-40 mb-40">
                <div className="container">
                    <header className="grid grid-cols-[60%_35%]  justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">{article.title}</h1>
                            <p className="mt-4 mb-4">{article.content}</p>
                            <div className="flex gap-3 items-center mb-4">
                                <div className="text-sm bg-tertiary px-2 py-1 text-primary">{article.category}</div>
                                <div className="text-sm">{article.readingTime}</div>
                            </div>

                        </div>
                        <img loading="lazy" className="w-full" src={article.image_url} alt={article.title}
                             title={article.title}/>

                    </header>
                    <div className="grid grid-cols-[70%_25%] justify-between">
                        <div className="flex flex-col gap-12">
                            <div className="blog__content--full"
                                 dangerouslySetInnerHTML={{__html: article.content_full ? article.content_full : ''}}
                            />
                            <div className="flex gap-4">
                                <img src={authorImage} className="w-12 h-12 rounded-full object-cover" alt=""/>

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
                        <aside className="flex flex-col mt-8">
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