import { Injectable } from '@nestjs/common';
import { Community, Organizer } from '@gdg-web/api-interfaces';

@Injectable()
export class AppService {
  getOrganizersData(): Organizer[] {
    return [
      {
        name: 'Elisabeth Mamede',
        image: 'assets/images/elisabeth-200x200.png',
        twitter: 'elisabethmamede',
        facebook: 'elisabeth.mamede',
        instagram: 'elisabeth.mamede',
        linkedin: 'elisabethmamede'
      },
      {
        name: 'Tácio Medeiros',
        image: 'assets/images/tacio-200x200.png',
        twitter: 'taciosmedeiros',
        facebook: '',
        instagram: 'tacio.medeiros',
        linkedin: 'taciosmedeiros'
      },
      {
        name: 'Pedro Moura',
        image: 'assets/images/pedro-200x200.png',
        twitter: 'pedromoura90',
        facebook: 'pedro.moura.3958',
        instagram: 'mepedromoura',
        linkedin: 'pedromourasistemas'
      },
      {
        name: 'Fernando Sedrez',
        image: 'assets/images/fernando-200x200.png',
        twitter: 'fmsedrez',
        facebook: 'fmsedrez',
        instagram: 'fmsedrez',
        linkedin: 'fmsedrez'
      },
      {
        name: 'Fernando Foster',
        image: 'assets/images/foster-200x200.png',
        twitter: 'brondwoo',
        facebook: 'nandofoster',
        instagram: 'brondwoo',
        linkedin: 'ferfoster'
      },
      {
        name: 'Maxwell Silva',
        image: 'assets/images/maxwell-200x200.png',
        twitter: 'MaxwellSmile',
        facebook: 'maxwell.pereira2',
        instagram: 'maxwell.silv4',
        linkedin: 'maxwell-silva'
      },
      {
        name: 'Fausto Blanco',
        image: 'assets/images/fausto-200x200.png',
        twitter: 'faustobdls1',
        facebook: 'faustobdls',
        instagram: 'faustobdls',
        linkedin: 'faustobdls'
      },
      {
        name: 'Ana Coimbra',
        image: 'assets/images/ana-200x200.png',
        twitter: 'anacoimbrag',
        facebook: 'anacoimbrag',
        instagram: 'anacoimbrag',
        linkedin: 'anacoimbrag'
      },
      {
        name: 'Rodrigo Marudi',
        image: 'assets/images/rodrigo-200x200.png',
        twitter: '',
        facebook: 'rodrigomarudi',
        instagram: 'rodrigomarudi',
        linkedin: 'rodrigo-marudi-414870138'
      },
      {
        name: 'Sandro Moreira',
        image: 'assets/images/sandro-200x200.png',
        twitter: 'sandro_moreira',
        facebook: 'moreira.sandro',
        instagram: 'sandro_moreira',
        linkedin: 'sandro-moreira'
      },
      {
        name: 'Carlos Barros',
        image: 'assets/images/carlos-200x200.png',
        twitter: 'carlospmbarros',
        facebook: 'carlos.pmbarros',
        instagram: 'carlospmbarros',
        linkedin: 'carlospmbarros'
      }
    ];
  }

  getCommunitiesData(type: 'gdg' | 'wtm'): Community[] {
    const communities: Community[] = [
      {
        name: 'WTM Uberlândia',
        type: 'wtm',
        website: 'https://gdg.community.dev/gdg-uberlandia'
      },
      {
        name: 'WTM Goiânia',
        type: 'wtm',
        website: 'https://gdg.community.dev/gdg-goiania'
      },
      {
        name: 'WTM Floripa',
        type: 'wtm',
        website: 'https://www.instagram.com/gdgfloripa'
      },
      {
        name: 'WTM Manaus',
        type: 'wtm',
        website: 'https://gdg.community.dev/gdg-manaus'
      },
      {
        name: 'GDG Uberlândia',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-uberlandia'
      },
      {
        name: 'GDG Pelotas',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-pelotas'
      },
      {
        name: 'GDG São José do Rio Preto',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-sao-jose-do-rio-preto'
      },
      {
        name: 'GDG Mogi Guaçu',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-mogi-guacu'
      },
      {
        name: 'GDG Recife',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-recife'
      },
      {
        name: 'GDG São João da Boa Vista',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-sao-joao-da-boa-vista'
      },
      {
        name: 'GDG Porto Alegre',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-porto-alegre'
      },
      {
        name: 'GDG Rio Verde',
        type: 'gdg',
        website: 'https://gdg.community.dev/gdg-rio-verde'
      },
    ];

    return communities.filter(c => c.type === type);
  }
}
