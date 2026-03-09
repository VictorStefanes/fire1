document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.getElementById("lang-toggle");
	if (!toggle) {
		return;
	}

	const translations = {
		es: {
			"nav.home": "Inicio",
			"nav.services": "Servicios",
			"nav.projects": "Proyectos",
			"nav.process": "Proceso",
			"nav.pricing": "Precios",
			"nav.faq": "FAQ",
			"nav.contact": "Contacto",
			"s3.title": "Quiénes Somos",
			"s3.body1": "Somos una agencia audiovisual enfocada en crear contenidos con estrategia, creatividad y entrega rapida, especialmente para agentes inmobiliarios y dueños de bares y restaurantes.",
			"s3.body2": "Con trabajos realizados en cuatro paises, aplicamos una vision amplia y moderna al contenido local. Nuestro enfoque esta en generar resultados reales y construir una presencia digital fuerte para negocios que quieren destacar.",
			"s4.titleTop": "Experiencia",
			"s4.titleBottom": "Internacional",
			"s4.body": "Ya trabajamos en Brasil, Estados Unidos, Portugal y España. Esa experiencia nos permite adaptar estilos, narrativas y estrategias segun el publico y el mercado.",
			"s5.titleTop": "Portafolio",
			"s5.titleBottom": "Visual",
			"s5.body": "Ejemplo: contenido inmobiliario\nFotos, videos, etc.",
			"s5.button": "clique aqui",
			"s6.titleTop": "Tengo el",
			"s6.titleHighlight": "testimonio",
			"s6.titleBottom": "por escrito.",
			"s6.client": "Cliente: agente inmobiliario (Brasil)",
			"s6.problemLabel": "Problema:",
			"s6.problemBody": "baja autoridad digital y ventas estancadas",
			"s6.solutionLabel": "Solucion:",
			"s6.solutionBody": "creamos 2 videos y una oferta de ventas con trafico pago",
			"s6.resultLabel": "Resultado:",
			"s6.resultBody": "R$ 900 mil en VGV (volumen general de ventas)",
			"s7.label": "Testimonios",
			"s7.card1.text": "Después del video, mi perfil empezó a recibir muchos más contactos.",
			"s7.card1.author": "- Lucas, agente inmobiliario",
			"s7.card2.text": "La entrega fue rápida, el video quedó increíble y los clientes comentaron de inmediato.",
			"s7.card2.author": "- Carla, restaurante en Madrid",
			"s7.card3.text": "¡¡Gracias!! Los videos y fotos estuvieron muy buenos, superaron todas mis expectativas.",
			"s7.card3.author": "- Lucas, agente inmobiliario",
			"s8.titleTop": "Nuestros",
			"s8.titleBottom": "Diferenciales",
			"s8.d1": "Visión estratégica",
			"s8.d2": "Agilidad y compromiso",
			"s8.d3": "Acompañamiento cercano",
			"s8.d4": "Enfoque total en resultados",
			"s8.d5": "Experiencia internacional aplicada"
		},
		pt: {
			"nav.home": "Inicio",
			"nav.services": "Servicos",
			"nav.projects": "Projetos",
			"nav.process": "Processo",
			"nav.pricing": "Precos",
			"nav.faq": "FAQ",
			"nav.contact": "Contato",
			"s3.title": "Quem Somos",
			"s3.body1": "Somos uma agencia audiovisual focada em criar conteudos com estrategia, criatividade e entrega rapida, especialmente para corretores de imoveis e donos de bares e restaurantes.",
			"s3.body2": "Com trabalhos realizados em quatro paises, aplicamos uma visao ampla e moderna ao conteudo local. Nosso foco esta em gerar resultados reais e construir uma presenca digital forte para negocios que querem se destacar.",
			"s4.titleTop": "Experiencia",
			"s4.titleBottom": "Internacional",
			"s4.body": "Ja trabalhamos no Brasil, Estados Unidos, Portugal e Espanha. Essa experiencia nos permite adaptar estilos, narrativas e estrategias de acordo com o publico e o mercado.",
			"s5.titleTop": "Portfolio",
			"s5.titleBottom": "Visual",
			"s5.body": "Exemplo: conteudo imobiliario\nFotos, videos, etc.",
			"s5.button": "clique aqui",
			"s6.titleTop": "Tenho o",
			"s6.titleHighlight": "depoimento",
			"s6.titleBottom": "por escrito.",
			"s6.client": "Cliente: corretor imobiliario (Brasil)",
			"s6.problemLabel": "Problema:",
			"s6.problemBody": "baixa autoridade digital e vendas estagnadas",
			"s6.solutionLabel": "Solucao:",
			"s6.solutionBody": "criamos 2 videos e uma oferta de vendas com trafico pago",
			"s6.resultLabel": "Resultado:",
			"s6.resultBody": "R$ 900 mil em VGV (volume geral de vendas)",
			"s7.label": "Depoimentos",
			"s7.card1.text": "Depois do video, meu perfil comecou a receber muito mais contatos.",
			"s7.card1.author": "- Lucas, corretor imobiliario",
			"s7.card2.text": "A entrega foi rapida, o video ficou incrivel e os clientes comentaram na hora.",
			"s7.card2.author": "- Carla, restaurante em Madrid",
			"s7.card3.text": "Obrigado!! Os videos e fotos ficaram muito bons, superaram todas as minhas expectativas.",
			"s7.card3.author": "- Lucas, corretor imobiliario",
			"s8.titleTop": "Nossos",
			"s8.titleBottom": "Diferenciais",
			"s8.d1": "Visao estrategica",
			"s8.d2": "Agilidade e compromisso",
			"s8.d3": "Acompanhamento proximo",
			"s8.d4": "Foco total em resultados",
			"s8.d5": "Experiencia internacional aplicada"
		}
	};

	const getCurrentLang = () => document.documentElement.lang || "es";

	const applyLang = (lang) => {
		const dictionary = translations[lang] || translations.es;
		document.documentElement.lang = lang;
		toggle.textContent = lang.toUpperCase();

		document.querySelectorAll("[data-lang-key]").forEach((node) => {
			const key = node.getAttribute("data-lang-key");
			if (!key || !dictionary[key]) {
				return;
			}

			if (key === "s5.body") {
				node.innerHTML = dictionary[key].replace(/\n/g, "<br>");
				return;
			}

			node.textContent = dictionary[key];
		});
	};

	toggle.addEventListener("click", () => {
		const nextLang = getCurrentLang() === "es" ? "pt" : "es";
		applyLang(nextLang);
	});

	applyLang(getCurrentLang());
});
