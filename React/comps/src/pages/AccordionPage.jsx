import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label: "Can I use React?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae fugit vero explicabo commodi et quos velit iure, modi eos neque, odio, corporis voluptatibus nam esse. At consectetur dolores consequuntur?",
    },
    {
      label: "Can I use Javascript?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae fugit vero explicabo commodi et quos velit iure, modi eos neque, odio, corporis voluptatibus nam esse. At consectetur dolores consequuntur?",
    },
    {
      label: "Can I use Tailwind CSS?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae fugit vero explicabo commodi et quos velit iure, modi eos neque, odio, corporis voluptatibus nam esse. At consectetur dolores consequuntur?",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
