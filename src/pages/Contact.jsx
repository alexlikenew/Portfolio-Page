import React from 'react';
import {useForm} from "react-hook-form";
import {contactPage, slowmo} from "../assets/img/index.jsx";
import Button from "../ui/Button.jsx";
import {useMutation} from "@tanstack/react-query";
import {supabase} from "../services/supabase.jsx";

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
        <section className="w-full h-screen relative">
            <img src={slowmo} className="absolute w-full h-full t-0 b-0 left-0 right-0" alt=""/>
            <div className="container flex flex-col gap-8 pt-30">
                <div>
                    <h1 className="text-5xl font-bold relative inline-block  ">Fill the form.<br></br>It`s easy.
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-2 relative">

                    <div className="pr-16 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl">
                                Let`s talk about<br></br>everything.
                            </h2>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis dicta ipsam iusto, laudantium libero reiciendis? Aspernatur assumenda dolor doloribus ea laboriosam magnam molestiae, odit quidem quisquam saepe sapiente sit!</span>
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
    );
}

export default Contact;