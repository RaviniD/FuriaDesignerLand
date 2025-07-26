import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-slide-info",
	imports: [CommonModule],
	templateUrl: "./slide-info.component.html",
	styleUrl: "./slide-info.component.css",
})
export class SlideInfoComponent {
	currentIndex = signal(0);

	slides = signal([
		{
			id: 1,
			tabTitle: "Arte-Finalização",
			title: "Arte-finalização: o acabamento que garante a entrega perfeita.",
			description:
				"Na publicidade, uma ideia brilhante só se concretiza quando está pronta para rodar. E é aí que entra a arte-finalização — a etapa essencial que garante que cada peça esteja tecnicamente correta, visualmente alinhada e pronta para veiculação, seja no digital ou no impresso. O arte-finalista cuida de ajustes finos, padronização de formatos, resolução de imagens, sangrias, margens de segurança, conversão de cores, fechamento de arquivos e muito mais. E aqui garantimos que o layout aprovado chegue exatamente como deveria em cada canal.",
			items: [
				"Na prática, é o que separa um bom layout de uma peça profissional e confiável.",
			],
			image: "/imgs/slide1.svg",
		},
		{
			id: 2,
			tabTitle: "Animação de Banners",
			title:
				"Animação em HTML5: banners leves, interativos e prontos para performar.",
			description:
				"Nós transformamos peças estáticas em experiências visuais mais atraentes e eficientes em HTML5. Com movimentos suaves, chamadas animadas e adaptação responsiva, os banners em HTML5 são ideais para mídia programática, portais e campanhas digitais. São leves, compatíveis com múltiplas plataformas e permitem controle total de interação e desempenho.Criou seu banner e precisa animar ele, deixe conosco.",
			items: ["Sua campanha merece movimento. E resultado."],
			image: "/imgs/slide2.svg",
		},
		{
			id: 3,
			tabTitle: "Adaptação e Desdobramento",
			title:
				"Adaptação e Desdobramento: a campanha certa em todos os formatos.",
			description:
				"Uma ideia forte precisa estar presente em todos os pontos de contato com o público — e é aí que entra o trabalho de adaptação e desdobramento. E essa etapa garante que a campanha principal seja convertida em diversos formatos, tamanhos e mídias, mantendo consistência visual, clareza na mensagem e eficiência na entrega. Posts, banners, stories, peças para portais, e-mails, OOH, vídeos, PDFs... Cada canal tem suas exigências, e a gente cuida de tudo para que sua marca esteja presente com agilidade, qualidade e padronização.",
			items: ["Menos retrabalho, mais escala e tudo no prazo."],
			image: "/imgs/slide4.svg",
		},
		{
			id: 4,
			tabTitle: "Social Vídeo",
			title:
				"Social Vídeo: conteúdo dinâmico que chama atenção e gera engajamento.",
			description:
				"No universo das redes sociais, o vídeo é rei. E o Social Vídeo é a ferramenta ideal para transformar mensagens em formatos rápidos, envolventes e feitos sob medida para cada plataforma. Criou na agência e quer ganhar tempo animando, deixe seu stories, reels, TikTok, YouTube e muito mais, com o nosso time.",
			items: ["É conteúdo para parar o dedo — e gerar resultado."],
			image: "/imgs/slide2.svg",
		},
	]);

	get currentSlide() {
		return this.slides()[this.currentIndex()];
	}
}
