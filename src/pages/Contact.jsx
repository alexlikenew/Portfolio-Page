import React from 'react';
import {useForm} from "react-hook-form";
import {contactPage, slowmo} from "../assets/img/index.jsx";
import Button from "../ui/Button.jsx";
import {useMutation} from "@tanstack/react-query";
import {supabase} from "../services/supabase.jsx";
import usePageMeta from "../hooks/usePageMeta.jsx";
import PageMeta from "../hooks/usePageMeta.jsx";

function Contact(props) {
    const {register, handleSubmit, reset} = useForm()


    async function sendContact(payload) {
        // invoke używa nazwy funkcji bez ścieżki
        const {data, error} = await supabase.functions.invoke('send-contact-email', {
            body: payload
        });
        if (error) throw error;
        return data;
    }

    const mutation = useMutation({
        mutationFn: sendContact,
        onSuccess: () => {
            reset(); // reset formy
            console.log('Form sent successfully!');
        },
    });

    const onSubmit = (formData) => mutation.mutate(formData);


    return (
        <>
            <PageMeta
                title="Contact – Work With React Frontend Developer | Rzeszów | Oleksandr Petryshyn"
                description="Get in touch with Oleksandr Petryshyn – a React Frontend Developer available for collaborations, freelance projects, and creative partnerships. Let's build something great together."
                keywords="contact frontend developer, hire React developer, freelance web developer Rzeszów, Oleksandr Petryshyn, contact page, work together"
                canonical="https://alexlikenew.pl/contact"
            />

            <section className="w-full h-screen relative">
                <img src={slowmo} className="absolute w-full h-full t-0 b-0 left-0 right-0" alt=""/>
                <div className="container flex flex-col gap-8 pt-40">
                    <div>
                        <h1 className="text-5xl font-bold relative inline-block  ">Fill the form.<br></br>It`s easy.
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-2 relative">

                        <div className="pr-16 flex flex-col gap-10">
                            <div className="flex flex-col gap-4">

                                <p>Have a question or idea? Just fill out the form or connect with me through the
                                    ‘Follow
                                    Me’ links below—I’d love to hear from you!
                                </p>
                            </div>
                            <form
                                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        {...register('firstName', {required: true})}
                                        placeholder="First Name"
                                        type="text"
                                        className="p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none"
                                    />
                                    <input
                                        {...register('lastName')}
                                        placeholder="Last Name"
                                        type="text"
                                        className="p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none"
                                    />
                                </div>

                                <div className="flex">
                                    <input
                                        {...register('email', {required: true})}
                                        placeholder="Email"
                                        type="text"
                                        className="w-full p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none"
                                    />
                                </div>

                                <div className="flex">
                            <textarea
                                {...register('message', {required: true})}
                                placeholder="Write your message"
                                rows="5"
                                className="w-full p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none resize-none"
                            ></textarea>
                                </div>
                                <Button type="submit" classes="btn btn-transparent">Wyślij</Button>
                            </form>

                        </div>
                        <div className="pl-16 ">


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
