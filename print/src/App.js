import React from 'react';
import Markup from './markup/markup';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Modal Video
import 'react-modal-video/css/modal-video.min.css';

import "swiper/swiper-bundle.min.css";

// Fonts
import './vendors/fontawesome/css/font-awesome.min.css';
import './vendors/flaticon/flaticon.css';
import './vendors/flaticon/light/flaticon1.css';
import './vendors/line-awesome/css/line-awesome.css';
import './vendors/themify/themify-icons.css';

// Stylesheet
import './css/typography.css';
import './css/shortcodes/shortcodes.css';
import './css/style.css';
import './css/color/color-1.css';

function App() {
	return (
		<div className="App">
			<Markup />
		</div>
	);
}

export default App;
