import { useState } from "react";
import ExpertiseCategoryContainer from "../molecules/ExpertiseCategoryContainer";


const expertise_categories = [
    {
        "expertise_category__name": "Programming",
        "expertise_category__list": [
          {
              "list_item__name": "HTML/CSS",
          },
          {
              "list_item__name": "React JS",
          },
          {
              "list_item__name": "JavaScript",
          },
          {
              "list_item__name": "PHP",
          },
          {
              "list_item__name": "Python",
          },
          {
              "list_item__name": "SQL",
          },
          {
              "list_item__name": "C#",
          },
        ]
    },
    {
        "expertise_category__name": "UI/UX designer",
        "expertise_category__list": [
          {
              "list_item__name": "Figma",
          },
          {
              "list_item__name": "Wireframing",
          },
          {
              "list_item__name": "Ideation",
          },
          {
              "list_item__name": "Prototyping",
          },
          {
              "list_item__name": "Affinity Designer",
          },

        ]
    },
    {
        "expertise_category__name": "Graphic Design",
        "expertise_category__list": [
            {
                "list_item__name": "Adobe Illustrator",
            },
            {
                "list_item__name": "Affinity Studio",
            },
            {
                "list_item__name": "Sketching",
            },
        ]
  },
  {
      "expertise_category__name": "Game Development",
      "expertise_category__list": [
          {
              "list_item__name": "Godot",
          },
          {
              "list_item__name": "Unity",
          },
          {
              "list_item__name": "Unreal Engine",
          },
      ]
  },
]



export default function ExpertiseCategoriesContainer() {
  return (
    <div className="expertise_categories__container">
        {expertise_categories.map((categorie, index) => (
            <ExpertiseCategoryContainer key={index} expertise_category__name={categorie.expertise_category__name} expertise_category__list={categorie.expertise_category__list} />
        ))}
    </div>
  );
}
