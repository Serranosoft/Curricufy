import Head from 'next/head'
import Link from "next/link"
import styled from '@emotion/styled';
import CvTemplate from '../components/cvTemplate';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plantillas de Currículums Elegantes y Personalizables para Rellenar y Descargar Online</title>
        <meta name="description" content="Rellena y personaliza currículums online para cualquier tipo de empleo con una estructura elegante, moderna y diferente a todos los demás." />
        <link rel="icon" href="/curricufy.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Rellena y personaliza currículums online para cualquier tipo de empleo con una estructura elegante, moderna y diferente a todos los demás." />
        <meta name="twitter:image" content="http://cufy.manu-scholz.com/wp-content/uploads/2021/07/curricufy-metadata.png" />

        <meta name="og:title" content="Plantillas de Currículum Vitae Elegantes y Personalizables para Rellenar y Descargar Online | Curricufy" />
        <meta name="og:description" content="Rellena y personaliza currículums online para cualquier tipo de empleo con una estructura elegante, moderna y diferente a todos los demás." />
        <meta property="og:image" content="http://cufy.manu-scholz.com/wp-content/uploads/2021/07/curricufy-metadata.png" />
        <meta name="og:image" content="http://cufy.manu-scholz.com/wp-content/uploads/2021/07/curricufy-metadata.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="550" />
        <meta property="og:url" content="https://curricufy.com/" />
        <meta property="og:type" content="website" />

      </Head>
      <HeroWrapper>
        <HomeTitle>Crea un CV y encuentra empleo fácil y rápido 📝</HomeTitle>
        <HomeSubtitle>Electricista ⚡ | Cocinero 👨‍🍳 | Profesor 👩‍🏫 | Estudiante 👨‍🎓 | Obrero 👷 | Programador 💻</HomeSubtitle>
        <HeroButton><Link href="/curriculums" passHref><a>Elegir y rellenar mi CV</a></Link></HeroButton>
      </HeroWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path fill="#a96da3" fill-opacity="1" d="M0,96L40,112C80,128,160,160,240,149.3C320,139,400,85,480,80C560,75,640,117,720,133.3C800,149,880,139,960,122.7C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>

      <SubtitleSections>PORTALES DE EMPLEO DE CONFIANZA</SubtitleSections>
      <JobsPortal>
        <JobPortalImg src="/images/decoration/linkedin.png" />
        <JobPortalImg src="/images/decoration/infojobs.png" />
        <JobPortalImg src="/images/decoration/tecnoempleo.png" />
        <JobPortalImg src="/images/decoration/infoempleo.png" />
      </JobsPortal>
      <HomeSection>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
          <path fill="#dbdbdb" fill-opacity="1" d="M0,160L21.8,160C43.6,160,87,160,131,144C174.5,128,218,96,262,101.3C305.5,107,349,149,393,144C436.4,139,480,85,524,101.3C567.3,117,611,203,655,213.3C698.2,224,742,160,785,122.7C829.1,85,873,75,916,106.7C960,139,1004,213,1047,245.3C1090.9,277,1135,267,1178,234.7C1221.8,203,1265,149,1309,122.7C1352.7,96,1396,96,1418,96L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        </svg>
        <SubtitleSections>DISEÑADOS PARA HACERTE DESTACAR</SubtitleSections>
        <LandingInfoWrapper>
          <LandingInfoBox>
            <LandingInfoBoxTitle>Diseños elegantes y llamativos</LandingInfoBoxTitle>
            <LandingInfoBoxDescr>Rellena y <H1>personaliza una plantilla de currículum online y rápido para el empleo al que quieres
              postular</H1> o echar tu cv.<br /><br />
              Utiliza nuestras atractivas plantillas adaptadas a los procesos
              online, creativos y con formato europeo.</LandingInfoBoxDescr>
          </LandingInfoBox>
          <LandingInfoBox>
            <LandingInfoBoxTitle>Plantillas específicas para cada empleo</LandingInfoBoxTitle>
            <LandingInfoBoxDescr>Elige el cv correspondiente a tu trabajo y rellena las distintas secciones.<br /><br />
              Indica de una manera clara las habilidades, aptitudes, experiencia laboral y el contenido que si se valora en una entrevista de trabajo.</LandingInfoBoxDescr>
          </LandingInfoBox>
        </LandingInfoWrapper>
        <LandingInfoBoxButton><Link href="/curriculums" passHref><a>Rellenar mi currículum</a></Link></LandingInfoBoxButton>
        <GalleryWrapper>
          <H2>PLANTILLAS DE CV</H2>
          <div>
            <BigImg src="/images/decoration/CV.jpeg" alt="Ejemplo de curriculum creativo" />
            <BigImg src="/images/decoration/CV2.jpeg" alt="Ejemplo de cv moderno" />
            <BigImg src="/images/decoration/CV3.jpeg" alt="Ejemplo de plantilla de cv simple" />
          </div>
        </GalleryWrapper>
        <FullWidthSection>
          <Grid4Columns>
            <div>
              <FullWidthSectionTitle>Diseños Simples</FullWidthSectionTitle>
              <LandingInfoBoxDescr style={{ color: "lightgray" }}>Diseños innovadores, simples y limpios de Currículum Vitae para todos los trabajos:<br /><br />
                Ejemplos de cv con formato europeo aptos para rellenar con frases, datos de interés e información sobre tus
                aptitudes mas importantes para conseguir el empleo que estas buscando.</LandingInfoBoxDescr>
            </div>
            <div>
              <FullWidthSectionTitle>Plantillas Creativas</FullWidthSectionTitle>
              <LandingInfoBoxDescr style={{ color: "lightgray" }}>Crea y usa plantillas creativas en Curricufy para postular en tu empleo:<br /><br />
                Plantillas de curriculo profesionales, empresariales y creativas con diseños modernos
                para hacer y descargar gratis.</LandingInfoBoxDescr>
            </div>
            <div>
              <FullWidthSectionTitle>Currículums Editables</FullWidthSectionTitle>
              <LandingInfoBoxDescr style={{ color: "lightgray" }}>Agrega frases creativas, datos interesantes y únicos sobre ti con las secciones específicas
                de los cv de Curricufy:<br /><br />

                Secciones especiales para el currículum de contador, camarero, programador que te ayudarán
                a entregar una carta laboral única e interesante.</LandingInfoBoxDescr>
            </div>
            <div>
              <FullWidthSectionTitle>Descargar Gratis</FullWidthSectionTitle>
              <LandingInfoBoxDescr style={{ color: "lightgray" }}>En Curricufy puedes rellenar, personalizar y descargar todos los diseños y cvs gratis: <br /><br />

                Haz clic en el botón de descargar en PDF, descargar en imágen o descargar en Word para
                bajarlo en tu ordenador y envíarlo.</LandingInfoBoxDescr>
            </div>
          </Grid4Columns>
          <CvsGrid>
            <CvTemplate emoji={'🧑‍🎓'} title={"Currículum para Estudiante"} descr={"Currículum para estudiantes que están todavía estudiando, recien graduados o personas para un primer empleo"} slug={"para-estudiante"} />
            <CvTemplate emoji={'🍽️'} title={"Currículum para Camarero/a"} descr={"Currículum para camareros de barra, exterior y sumillers en bares, restaurantes y taperías"} slug={"para-camarero"} />
            <CvTemplate emoji={'🏍️📦'} title={"Currículum para Repartidor/a"} descr={"Currículum para repartidores de alimentación u paquetería en Amazon, Uber o Glovo"} slug={"para-repartidor"} />
          </CvsGrid>
        </FullWidthSection>
      </HomeSection>
    </>
  )
}

const HeroWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #A96DA3;
    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const HomeTitle = styled.p`
    font-size: 56px;
    font-family: 'Cabin', sans-serif;
    color: #242424;
    text-align: center;
    margin: 0 auto;
    @media(max-width: 768px) {
        padding: 36px 8px 16px 8px;
        font-size: 32px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const HomeSubtitle = styled.p`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    margin: 0px auto 16px auto;
    font-size: 20px;
    text-align: center;
    word-spacing: 7px;
    @media(max-width: 768px) {
        padding: 8px;
        font-size: 15px;
    }
`

const HeroButton = styled.button`
    display: block;
    width: 25%;
    margin: 32px auto 0px auto;
    font-size: 17px;
    text-align: center;
    color: #242424;
    font-weight: bold;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        transform: scale(0.95);
    }
    & > a {
      display: block;
      padding: 16px 24px;
    }
    @media(max-width: 920px) {
      width: 80%;
      padding: 8px 16px;
      
    }
`

const HomeSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  background-color: #f2f2f2;
  @media(max-width: 768px) {
    margin-top: 8px;
  }
`

const JobsPortal = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 auto 0px auto;
  @media(max-width: 920px) {
    & > img {
      height: 85px;
      margin: 0 auto;

    }
  }
`

const SubtitleSections = styled.p`
  word-spacing: 2px;
  font-size: 20px;
  color: #242424;
  text-align: center;
  margin-top: 0;
`

const JobPortalImg = styled.img`
  height: 100px;
  margin: 0 auto;
`

const LandingInfoWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  margin: 24px auto;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const LandingInfoBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media(max-width: 768px) {
    width: 100% !important;
  }
`

const LandingInfoBoxTitle = styled.h2`
  margin: 16px 0;
  color: #242424;
  font-size: 28px;
  font-weight: bold;
  @media(max-width: 768px) {
    font-size: 22px;
  }
`

const LandingInfoBoxDescr = styled.span`
  font-size: 17px;
  color: #242424;
  font-weight: 300;
  margin: 8px auto;
  line-height: 1.3;
  & > a {
    color: #34d399;
  }
  @media(max-width: 768px) {
    font-size: 13.5px;
  }
`

const LandingInfoBoxButton = styled.button`
  display: block;
  width: 30%;
  margin: 24px auto 0px auto;
  background: #a96da3;
  font-size: 17px;
  text-align: center;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  border: 0;
  border-radius: 3px;
  font-weight: bold;
  &:hover {
      transform: scale(0.95);
  }
  & > a {
    display: block;
    padding: 20px 16px;
  }
  @media(max-width: 920px) {
    width: 80%;
    padding: 8px 16;
  }
`

const H1 = styled.h1`
 display: inline;
 font-size: 17px;
 color: #242424;
 font-weight: 300;
 @media(max-width: 768px) {
  font-size: 13.5px;
  }
`

const H2 = styled.h2`
  word-spacing: 2px;
  font-size: 20px;
  font-weight: 400;
  color: #242424;
  text-align: center;
  margin-top: 0;
`

const GalleryWrapper = styled.div`
  position: relative;
  top: 50px;
  width: 78%;
  margin: 8px auto 0 auto;
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 20px;
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  @media(max-width: 768px) {
    width: 95%;
    & > div {
      grid-template-columns: 1fr;
    }
  }
`

const BigImg = styled.img`
  width: 100%;
  height: 100%;
`

const FullWidthSection = styled.div`
  width: 100%;
  padding: 80px 120px;
  margin-top: -30px;
  background: #421a42;
  @media(max-width: 768px) {
    padding: 80px 16px;
  }
`

const Grid4Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 8px auto 40px auto;
`

const FullWidthSectionTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.6px;
  word-spacing: 3px;
`

const CvsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    margin: 40px auto 24px auto;
`