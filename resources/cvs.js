/*
    sections:

    1: información general (perfil, nombre, email, número de tlf, web personal / linkedin)
    2: logos para tus habilidades
    3: estudios academicos
    4: experiencia laboral
    5: idiomas
    6: webs creadas
    7: otras habilidades
    **8: carné de vehículos
    **9: carné de manipulación de alimentos

*/


const cvs = [
    /* {
        id: 1,
        slug: "vitae-normal",
        title: "Currículum Vitae General",
        emoji: "🧑",
        descr: "Currículum vitae general con todas las secciones básicas para postular y aplicar en cualquier trabajo",
        sections: [1, 3, 4, 5, 7]
    }, */
    {
        id: 2,
        slug: "para-maestro",
        title: "Currículum para Maestro / Profesor",
        emoji: "👩‍🏫",
        descr: "Currículum para maestros y profesores en el sector privado, profesores a tiempo parcial y profesores particulares",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 3,
        slug: "para-cocinero",
        title: "Currículum para Cocinero/a",
        emoji: "👨‍🍳",
        descr: "Currículum para cocineros, ayudantes de cocina, \"pinche de cocina\" para restaurantes, bares y taperías",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 4,
        slug: "para-estudiante",
        title: "Currículum para Estudiante",
        emoji: "🧑‍🎓",
        descr: "Currículum para estudiantes que están todavía estudiando, recien graduados o personas para un primer empleo",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 5,
        slug: "para-ingenieros",
        title: "Currículum para Ingeniero/a",
        emoji: "🧬",
        descr: "Currículum para ingenieros recien egresados o que buscan un trabajo a tiempo parcial durante sus estudios",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 6,
        slug: "para-cajero",
        title: "Currículum para Cajero/a",
        emoji: "🙆‍♀️💳🧾",
        descr: "Currículum para cajeros/as de negocios locales como tiendas de ropa, bazar y alimentación básica",
        sections: [1, 3, 4, 5, 7]
    },
    
    {
        id: 7,
        slug: "para-ninera",
        title: "Currículum para Niñera/o",
        emoji: "👩‍👧‍👦",
        descr: "Currículum para niñeros y niñeras en el sector privado o empleo como autónomo particular",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 8,
        slug: "para-dependiente-de-tienda",
        title: "Currículum para Dependiente/a de Tienda",
        emoji: "🙋‍♂️🏪",
        descr: "Currículum para dependiente de tienda/reponedor en grandes marcas o tiendas locales",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 9,
        slug: "para-dependiente-de-supermercado",
        title: "Currículum para Dependiente/a de Supermercado",
        emoji: "🙋‍♂️🛒",
        descr: "Currículum para dependiente y reponedor en supermercados con manipulación",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 10,
        slug: "para-camarero",
        title: "Currículum para Camarero/a",
        emoji: "🍽️",
        descr: "Currículum para camareros de barra, exterior y sumillers en bares, restaurantes y taperías",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 11,
        slug: "para-repartidor",
        title: "Currículum para Repartidor/a",
        emoji: "🏍️📦",
        descr: "Currículum para repartidores de alimentación u paquetería en Amazon, Uber o Glovo",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 12,
        slug: "para-limpiadora",
        title: "Currículum para Limpiador/a",
        emoji: "🧹🧽",
        descr: "Currículum para limpiador/a en grandes superficies o como particular en apartamentos, hoteles o pisos",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 13,
        slug: "para-jardinero",
        title: "Currículum para Jardinero/a",
        emoji: "✂️🌲🌷",
        descr: "Currículum para jardinero, mantenimiento de zonas verdes en el sector público o privado como urbanizaciones o chalets",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 14,
        slug: "para-florista",
        title: "Currículum para Florista",
        emoji: "🌹🌻",
        descr: "Currículum para dependiente/a de una floristeria, mantenimiento del producto y del local",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 15,
        slug: "para-veterinario",
        title: "Currículum para Veterinario/a",
        emoji: "👨‍⚕️🐶",
        descr: "Currículum para veterinario/a en el sector público o privado, peluquería canina y medicina en mascotas",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 16,
        slug: "para-zapatero",
        title: "Currículum para Zapatero/a",
        emoji: "👞🛠️",
        descr: "Currículum para zapateros/as, mantenimiento del calzado, arreglos y dependiente del local",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 17,
        slug: "para-cerrajero",
        title: "Currículum para Cerrajero/a",
        emoji: "💁‍♂️🔑",
        descr: "Currículum para cerrajero/a, asistencia en casos de emergencia, reparación de cerrojos y replicas de llaves",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 18,
        slug: "para-tecnico-informatico",
        title: "Currículum para Técnico Informático",
        emoji: "🧑👓",
        descr: "Currículum para técnicos móviles, informáticos, ordenadores y todo tipo de periféricos en tienda o como particular",
        sections: [1, 3, 4, 5, 7]
    }, 
    {
        id: 19,
        slug: "para-programador",
        title: "Currículum para Programador/a",
        emoji: "🧑‍💻",
        descr: "Currículum para programadores móvil, web y aplicaciones de PC, mantenimiento de software y desarrollo de proyectos",
        sections: [1, 3, 4, 5, 7]
    }, 
    {
        id: 20,
        slug: "para-teleoperador",
        title: "Currículum para Teleoperador/a",
        emoji: "📞",
        descr: "Currículum para teleoperador/a en el sector privado o público para asistencia, informativo o soporte técnico",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 21,
        slug: "para-relojero",
        title: "Currículum para Relojero/a",
        emoji: "⌚",
        descr: "Currículum para relojero/a, atención al cliente, reparación de manillas y relojes de cualquier material ",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 22,
        slug: "para-costurero",
        title: "Currículum para Costurero/a",
        emoji: "🧵",
        descr: "Currículum para costurero, conocimiento en todo tipo de telas, arreglos en camisas, vestidos o blusas",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 23,
        slug: "para-escritor",
        title: "Currículum para Escritor/a",
        emoji: "📚🖊️",
        descr: "qweqweq eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 24,
        slug: "para-secretario",
        title: "Currículum para Secretario/a",
        emoji: "👩‍💼💻",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 25,
        slug: "para-oficinista",
        title: "Currículum para Oficinista - Administrativo/a",
        emoji: "👨‍💼",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 26,
        slug: "para-mecanico",
        title: "Currículum para Mecánico/a",
        emoji: "👨‍🔧",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 27,
        slug: "para-socorrista",
        title: "Currículum para Socorrista",
        emoji: "🆘🏊",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 28,
        slug: "para-enfermera",
        title: "Currículum para Enfermera/o",
        emoji: "👩‍⚕️ 💉",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 29,
        slug: "para-cuidador-de-geriatrico",
        title: "Currículum para Cuidador de Geriátrico",
        emoji: "👨‍⚕️🧓",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 30,
        slug: "para-fotografo",
        title: "Currículum para Fotografo/a",
        emoji: "📸",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 31,
        slug: "para-joyero",
        title: "Currículum para Joyero/a",
        emoji: "💎",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 32,
        slug: "para-locutor-de-radio",
        title: "Currículum para Locutor/a de Radio",
        emoji: "📻",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 33,
        slug: "para-podologo",
        title: "Currículum para Podologo/a",
        emoji: "👨‍⚕️🦶",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 34,
        slug: "para-ats",
        title: "Currículum para ATS",
        emoji: "🩸🩹",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 35,
        slug: "para-ortopedista",
        title: "Currículum para Ortopedista",
        emoji: "🦿🦾",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 36,
        slug: "para-notario",
        title: "Currículum para Notario",
        emoji: "📄✒️",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 37,
        slug: "para-juez",
        title: "Currículum para Juez",
        emoji: "👨‍⚖️",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 38,
        slug: "para-granjero",
        title: "Currículum para Granjero/a",
        emoji: "👨‍🌾",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 39,
        slug: "para-ganadero",
        title: "Currículum para Ganadero",
        emoji: "👨‍🌾🐄",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 40,
        slug: "para-cuidador-de-zoo",
        title: "Currículum para Cuidador/a de Zoo",
        emoji: "🙅‍♂️🐒🦍",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 41,
        slug: "para-biologo",
        title: "Currículum para Biólogo/a",
        emoji: "🧬🐳 🧫",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },
    {
        id: 42,
        slug: "para-dentista",
        title: "Currículum para Dentista",
        emoji: "👩‍⚕️🦷",
        descr: "qweqweqw eqweqweqweqw qweqweqwe qweqweqwe rwetwet",
        sections: [1, 3, 4, 5, 7]
    },

]

export default cvs;
