import { useState } from "react";
import Header from "./components/header/Header";
import { GlobalStyles } from "./styles/globalStyles";
import Cards from "./components/cards/Cards";


const App = () => {

	const [active, setActive] = useState(true);

	return(
		<>
			<GlobalStyles active={active}/>
				<div className="container">
					<Header 
						active={active}
						setActive={setActive}
					/>
				</div>
				<div className="containerCards">
					<Cards
						active={active}
						setActive={setActive}
						src='/icon-facebook.svg'
						alt='Icono Facebook'
						user='@nathanf'
						h1='1987'
						srcCount='/icon-up.svg'
						altCount='Up'
						followers='12 Today'
					/>
					<Cards
						active={active}
						src='/icon-twitter.svg'
						alt='Icono Twitter'
						user='@nathanf'
						h1='1044'
						srcCount='/icon-up.svg'
						altCount='Up'
						followers='99 Today'
					/>
					<Cards
						active={active}
						src='/icon-instagram.svg'
						alt='Icono Instagram'
						user='@realnathanf'
						h1='11k'
						srcCount='/icon-up.svg'
						altCount='Up'
						followers='1099 Today'
					/>
					<Cards
						active={active}
						src='/icon-youtube.svg'
						alt='Icono Youtube'
						user='Nathan F.'
						h1='8239'
						srcCount='/icon-down.svg'
						altCount='Down'
						followers='144 Today'
					/>
				</div>
		
		

		</>
		
	);

};

export default App;
