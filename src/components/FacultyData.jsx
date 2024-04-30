const Faculties = [
    {
      id: 1,
      name: "Anupama Sharma",
      job: "Software Engineer",
      text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
    },
    {
      id: 2,
      name: "Alka Rani",
      job: "Graphic Designer",
      text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
    },
    {
      id: 3,
      name: "Amandeep Kaur",
      job: "Marketing Manager",
      text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
    },
    {
      id: 4,
      name: "Amarjit Singh",
      job: "Content Strategist",
      text: "I have worked with many content creators over the years, but none have impressed me as much as this team. They have a knack for crafting compelling and engaging content that resonates with our audience and drives real results. I highly recommend them!",
    },
    {
      id: 5,
      name: "Anamika Rani Shakiya",
      job: "Data Analyst",
      text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
    },
    {
        id:6,
        name: "Anjana Sharma",
        job:"Journalist",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    },
    {
        id:7,
        name: "Anjana Sharma",
        job:"Journalist",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:8,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:9,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:10,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:11,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:12,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:13,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:14,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:15,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:16,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:17,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:18,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:19,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {

        id:20,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:21,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:22,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:23,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:24,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:25,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:26,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:27,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:28,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:29,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:30,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:31,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:32,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:33,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:34,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:35,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:36,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:37,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:38,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:39,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:40,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:41,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:42,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:43,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:44,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:45,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:46,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:47,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:48,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:49,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:50,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:51,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:52,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:53,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:54,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:55,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:56,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:57,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:58,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:59,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:60,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:61,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:62,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:63,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:64,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:65,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:66,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:67,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:68,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:69,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:70,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:71,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:72,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:73,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:74,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:75,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:76,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:77,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:78,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:79,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:80,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:81,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:82,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:83,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
    ,
    {
        id:84,
        name: "Anjana Sharma",
        job:"Journalist",
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fambika_vats02&psig=AOvVaw0LNsYowPwcj0hcnhxi453R&ust=1711608134237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj316jrk4UDFQAAAAAdAAAAABAE",
        text:"Dedicated journalist with a passion for uncovering truth and telling impactful stories. Experienced in investigative reporting and feature writing across various beats. Committed to ethical journalism and fostering public discourse. Seeking to inform and inspire through storytelling."

    }
  ];
  
  export default Faculties;
  