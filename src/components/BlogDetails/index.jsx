import React from "react";
import "./style.css";
import profile from "../../assets/images/person.jpeg";
import banner from "../../assets/images/banner.png";
import { Container } from "react-bootstrap";
const BlogDetails = () => {
  return (
    <div className="blog-details d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-2">
        <img
          src={profile}
          alt="profile"
          width={40}
          height={40}
          className="profile h-10 w-10 rounded-full"
        />
        <h6 className="text-sm">Joana Marie Jones</h6>
      </div>
      <p className="text-lg">
        Elon Musk shows off updates to his brain chips and says he&apos;s going
        to install one in himself when they are ready
      </p>
      <img src={banner} alt="info-img" loading="lazy" className="w-100" />

      <p className="text-md">
        Elon Musk shows off updates to his brain chips and says he&apos;s going
        to install one in himself when they are readyElon Musk&apos;s health
        tech venture Neuralink shared updates to its brain-implant technology
        during a “show and tell” recruitment event Wednesday night. Musk said
        during the event that he plans to get one of the implants himself.{" "}
        <br />
        <br /> Musk said two of the company&apos;s applications will aim to
        restore vision, even for people who were born blind, and a third
        application will focus on the motor cortex, restoring “full body
        functionality” for people with severed spinal cords. “We&apos;re
        confident there are no physical limitations to restoring full body
        functionality,” Musk said. <br />
        <br /> Neuralink could begin to test the motor cortex technology in
        humans in as soon as six months, Musk said. <br />
        <br />
        “Obviously, we want to be extremely careful and certain that it will
        work well before putting a device in a human, but we&apos;re submitted,
        I think, most of our paperwork to the FDA,” he said. <br />
        <br /> Musk also said he plans to get one himself. “You could have a
        Neuralink device implanted right now and you wouldn&apos;t even know. I
        mean, hypothetically ... In fact, in one of these demos, I will,” he
        said. He reiterated that on Twitter after the event. <br />
        <br /> Since none of Neuralink&apos;s devices have been tested on humans
        or approved by the FDA, Wednesday&apos;s announcements warrant
        skepticism, said Xing Chen, assistant professor in the Department of
        Ophthalmology at the University of Pittsburgh School of Medicine. <br />
        <br /> “Neuralink is a company [that] doesn&apos;t have to answer to
        shareholders,” she told CNBC. “I don&apos;t know how much oversight is
        involved, but I think it&apos;s very important for the public to always
        keep in mind that before anything has been approved by the FDA, or any
        governmental regulatory body, all claims need to be very, very
        skeptically examined.” <br />
        <br />
        Neuralink was founded in 2016 by Musk and a group of other scientists
        and engineers. It strives to develop brain-computer interfaces, or BCIs,
        that connect the human brain to computers that can decipher neural
        signals. Musk invested tens of millions of his personal wealth into the
        company and has said, without evidence, that Neuralink&apos;s devices
        could enable “superhuman cognition,” enable paralyzed people to operate
        smartphones or robotic limbs with their minds someday, and “solve”
        autism and schizophrenia. <br /> The company&apos;s presentation
        Wednesday echoed these lofty ambitions, as Musk claimed that “as
        miraculous as it may sound, we&apos;re confident that it is possible to
        restore full body functionality to someone who has a severed spinal
        cord.”
      </p>
    </div>
  );
};

export default BlogDetails;
