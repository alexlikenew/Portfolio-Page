import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {chevronDown} from "../assets/icons/index.jsx";

const faqData = [
    {
        id: 1,
        question: "What technologies do you primarily work with?",
        answer: "I specialize in React for building interactive UIs, along with HTML, CSS/SASS, and JavaScript for frontend development."
    },
    {
        id: 2,
        question: "How do you manage state in your React applications?",
        answer: "I use React's built-in state and context for simple cases, and tools like Redux or React Query for more complex state management and data fetching."
    },
    {
        id: 3,
        question: "Do you have experience with responsive design?",
        answer: "Yes, I ensure all my projects are fully responsive, using CSS Grid, Flexbox, and SASS for maintainable and scalable layouts."
    },
    {
        id: 4,
        question: "How do you ensure code quality in your projects?",
        answer: "I follow best practices, use clean and reusable components, write readable code, and often integrate ESLint and Prettier for consistent code formatting."
    },
    {
        id: 5,
        question: "Have you worked with version control systems?",
        answer: "Yes, I use Git for version control, regularly committing changes, branching features, and collaborating on projects via platforms like GitHub."
    },
    {
        id: 6,
        question: "How do you handle API integration in React projects?",
        answer: "I fetch and manage data using tools like Axios or the Fetch API, often combined with React Query for caching, loading states, and error handling."
    },
    {
        id: 7,
        question: "Can you work on both new projects and existing codebases?",
        answer: "Absolutely. I can build projects from scratch using React, or maintain and improve existing applications, refactoring code and implementing new features efficiently."
    }
];


function Faq(props) {

    const [showAnswer, setShowAnswer] = useState('');

    function handleAnswer(id) {
        showAnswer === id ? setShowAnswer('') : setShowAnswer(id);
    }

    useEffect(() => {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        };

        const existingScript = document.getElementById("faq-json-ld");
        if (existingScript) existingScript.remove();

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "faq-json-ld";
        script.text = JSON.stringify(faqSchema);
        document.head.appendChild(script);


        return () => {
            if (document.getElementById("faq-json-ld")) {
                document.getElementById("faq-json-ld").remove();
            }
        };
    }, []);

    return (
        <div className="w-full mt-40 mb-30">
            <div className="container container--768 flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center gap-10">
                    <h2 className="text-5xl font-bold relative inline-block  text-white">
                        FAQ
                        <span className="brush-bg left-[-66%] w-[250%] h-[3em]"></span>
                    </h2>
                    <p className="opacity-70 mb-4 text-center">
                        Find answers to the most common questions about my frontend development experience, skills, and
                        projects. <br></br>
                        A helpful guide for clients and recruiters to understand my capabilities and working style.
                    </p>
                </div>
                <div className="w-full  flex flex-col items-center justify-center gap-3 items-start">
                    {faqData.map(question =>
                        <dl id={question.id}
                            className={`w-full flex flex-col  justify-center gap-2 cursor-pointer rounded-1 border-1 px-4 py-6 transition-all duration-300 ${showAnswer === question.id ? 'border-tertiary-200' : 'border-secondary-300 hover:opacity-90 '}`}
                            onClick={() => handleAnswer(question.id)}>
                            <dt className="flex w-full justify-between">{question.question}
                                <img
                                    className={`transition-all duration-500 ${showAnswer === question.id ? 'transform rotate-180' : ''}`}
                                    src={chevronDown}
                                    alt="Chevron down icon"
                                    title="Chevron down icon"/>
                            </dt>
                            <dd className={`${showAnswer === question.id ? 'flex' : 'hidden'} opacity-70 `}>{question.answer}
                            </dd>
                        </dl>)}


                </div>

            </div>
        </div>
    );
}

export default Faq;