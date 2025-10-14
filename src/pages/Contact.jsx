import React from 'react';
import {useForm} from "react-hook-form";
import {contactPage, slowmo} from "../assets/img/index.jsx";
import Button from "../ui/Button.jsx";
import {useMutation} from "@tanstack/react-query";
import {supabase} from "../services/supabase.jsx";
import PageMeta from "../ui/PageMeta.jsx";

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
                <img src={slowmo} className="absolute w-full h-full top-0 bottom-0 left-0 right-0" alt=""/>
                <div className="container flex flex-col sm:gap-4 md:gap-6 lg:gap-8 sm:pt-20 md:pt-32 lg:pt-40">
                    <div>
                        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block  ">Fill the form.<br></br>It`s easy.
                        </h1>
                    </div>

                    <div className="sm:grid-cols-1 lg:grid-cols-2 sm:gap-4 lg:gap-2 relative grid">

                        <div className="sm:pr-0 lg:pr-16 flex flex-col sm:gap-6 lg:gap-10">
                            <div className="flex flex-col sm:gap-2 lg:gap-4">

                                <p>Have a question or idea? Just fill out the form or connect with me through the
                                   ‘Follow
                                   Me’ links below—I’d love to hear from you!
                                </p>
                            </div>
                            <form
                                className="flex flex-col sm:gap-3 lg:gap-4 sm:p-4 lg:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="sm:grid-cols-1 md:grid-cols-2 sm:gap-2 lg:gap-4 grid">
                                    <input
                                        {...register('firstName', {required: true})}
                                        placeholder="First Name"
                                        type="text"
                                        className="sm:p-1 lg:p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none"
                                    />
                                    <input
                                        {...register('lastName')}
                                        placeholder="Last Name"
                                        type="text"
                                        className="sm:p-1 lg:p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none"
                                    />
                                </div>

                                <div className="flex">
                                    <input
                                        {...register('email', {required: true})}
                                        placeholder="Email"
                                        type="text"
                                        className="w-full sm:p-1 lg:p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none"
                                    />
                                </div>

                                <div className="flex">
                            <textarea
                                {...register('message', {required: true})}
                                placeholder="Write your message"
                                rows="5"
                                className="w-full sm:p-1 lg:p-2 rounded-lg bg-white/20  placeholder-white/70 focus:outline-none resize-none"
                            ></textarea>
                                </div>
                                <Button type="submit" classes="btn btn-transparent">Wyślij</Button>
                            </form>

                        </div>
                        <div className="sm:pl-0 lg:pl-16 ">


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;