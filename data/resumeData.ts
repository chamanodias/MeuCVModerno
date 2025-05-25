

export interface IContact {
  phone: string;
  email: string;
  location: string;
}

export interface IEducation {
  degree: string;
  institution: string;
  period: string;
}

export interface IExperience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface ISkillSet { 
  category: string;
  items: string[];
}

export interface IProject {
  name: string;
  description?: string; 
}

export interface ILanguage {
  name: string;
  level: string;
}

export interface IResumeData {
  name: string;
  professionalObjective: string;
  contact: IContact;
  education: IEducation[];
  experience: IExperience[];
  hardSkills: ISkillSet[];
  softSkills: string[];
  programmingKnowledge: string[];
  academicProjects: IProject[];
  languages: ILanguage[];
}

export const resumeData: IResumeData = {
  name: "LUCAS DIAS", 
  professionalObjective: "Estudante de Ciência da Computação na UNICAP com interesse forte na área de dados, busco estágio para aplicar conhecimentos teóricos em projetos práticos e aprimorar minhas competências profissionais e pessoais.", // [cite: 1]
  contact: {
    phone: "(81) 97314-4321", 
    email: "lucasdepardias@gmail.com", 
    location: "Recife - PE" 
  },
  education: [
    {
      degree: "BACHALERADO EM CIÊNCIA DA COMPUTAÇÃO", 
      institution: "UNIVERSIDADE CATÓLICA DE PERNAMBUCO", 
      period: "2023.2 - 2027.1"
    }
  ],
  experience: [
    {
      role: "Consultor Galaxy", 
      company: "Samsung", 
      period: "2024.2 - Present", 
      responsibilities: [
        "Auxiliar na transferência de dados entre dispositivos, independentemente da marca ou sistema operacional.", 
        "Atualizar softwares e realizar análises técnicas para identificar melhorias e soluções.", 
        "Prestar suporte em solicitações de reparo, acompanhando processos e esclarecendo dúvidas sobre os serviços oferecidos." 
      ]
    },
    {
      role: "Estagiário", 
      company: "Britanic", 
      period: "2024.1", 
      responsibilities: [
        "Auxiliei nas aulas, preparei materiais didáticos e ofereci suporte aos alunos.", 
        "Conduzi atividades de conversação, corrigi exercícios e testes, além de colaborar na criação de planos de aula.", 
        "Aprimorei habilidades de ensino, comunicação e organização, aprofundando meu conhecimento em metodologias de ensino de línguas." 
      ]
    },
    {
      role: "Staff Voluntário", 
      company: "Tempest Academy", 
      period: "2023.2", 
      responsibilities: [
        "Colaborei na organização e execução de atividades, oferecendo suporte aos participantes e garantindo o bom andamento do evento." 
      ]
    },
    {
      role: "Voluntário no Rec'n'Play", 
      company: "CESAR School", 
      period: "2023.2", 
      responsibilities: [
        "Interagi com alunos do ensino médio, apresentando iniciativas e projetos da instituição.", 
        "Auxiliei na organização e funcionamento das atividades, mentorando e guiando os alunos." 
      ]
    },
    {
      role: "Monitor de sistemas digitais", 
      company: "CESAR School", 
      period: "2023.2", 
      responsibilities: [
        "Auxiliava alunos na compreensão e aplicação de conceitos relacionados a sistemas digitais.", 
        "Reforçava conteúdos dados em aula e resolvia dúvidas teóricas e práticas." 
      ]
    }
  ],
  hardSkills: [
    { category: "Metodologias Ágeis", items: ["Kanban", "Scrum"] }, 
    { category: "Ferramentas", items: ["Canva", "Figma", "Excel"] }, 
    { category: "Gerenciamento de projetos", items: ["Trello", "Jira", "Azure"] }, 
    { category: "IA", items: ["Chat GPT", "Pandas", "N8N"] } 
  ],
  softSkills: [
    "Liderança", 
    "Empatia", 
    "Trabalho em equipe" 
  ],
  programmingKnowledge: [
    "Python", "React", 
    "JavaScript", "Html&Css", 
    "Java", "C", "SQL", 
    "Nodejs" 
  ],
  academicProjects: [
    { name: "ToDoList App" }, 
    { name: "Aprimoramento da gestão do hospital das clínicas de Pernambuco" }, 
    { name: "Melhoria da experiência do hóspede para a rede de hotéis Chambres." } 
  ],
  languages: [
    { name: "Português", level: "Nativo" }, 
    { name: "Inglês", level: "Avançado" } 
  ]
};