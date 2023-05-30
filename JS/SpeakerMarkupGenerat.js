const SpeakerInformation = [
  {
    id: '01',
    SpeakerImage: 'Asset/speaker_01.svg',
    SpeakerAlt: 'Here is speaker image',
    SpeakerName: 'Yochai Benkler',
    SpeakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    SpeakerProfile: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: '02',
    SpeakerImage: '/Asset/speaker_03.png',
    SpeakerAlt: 'Here is speaker image',
    SpeakerName: 'Yochai Benkler',
    SpeakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    SpeakerProfile: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: '03',
    SpeakerImage: '/Asset/speaker_05.png',
    SpeakerAlt: 'Here is speaker image',
    SpeakerName: 'Yochai Benkler',
    SpeakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    SpeakerProfile: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: '04',
    SpeakerImage: '/Asset/speaker_06.png',
    SpeakerAlt: 'Here is speaker image',
    SpeakerName: 'Yochai Benkler',
    SpeakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    SpeakerProfile: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: '04',
    SpeakerImage: '/Asset/speaker_01 1.svg',
    SpeakerAlt: 'Here is speaker image',
    SpeakerName: 'Yochai Benkler',
    SpeakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    SpeakerProfile: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: '04',
    SpeakerImage: '/Asset/speaker_01.svg',
    SpeakerAlt: 'Here is speaker image',
    SpeakerName: 'Yochai Benkler',
    SpeakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    SpeakerProfile: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const seeMoreSpeakersButton = `
    <button class="secondary-btn" id="see-more-speakers-btn">
      <span>more</span>
      <img src="Asset/arrow.svg" alt="More view icon" />
    </button>
  `;
const seeFewerSpeakersButton = `
    <button class="secondary-btn" id="see-fewer-speakers-btn">
      <span>less</span>
      <img class="see-fewer-speakers-arrow" src="Asset/arrow.svg" alt="" />
    </button>
  `;

const generateSingleSpeakersMarkup = (SpeakerInformation) => {
  const {
    SpeakerImage,
    SpeakerAlt,
    SpeakerName,
    SpeakerTitle,
    SpeakerProfile,
  } = SpeakerInformation;

  return `
      <article class="speaker-info">
        <img
          class="speaker-photo"
          src="${SpeakerImage}"
          alt="${SpeakerAlt}"
        />
        <section class="speaker-details">
          <h4>${SpeakerName}</h4>
          <h5>${SpeakerTitle}</h5>
          <hr class="flex-row" />
          <p>${SpeakerProfile}</p>
        </section>
      </article>
    `;
};

const generateAllSpeakersMarkup = (shouldBeExpanded) => {
  let speakers;
  let btn = '';

  if (shouldBeExpanded) {
    speakers = [...SpeakerInformation];
  } else {
    speakers = [...SpeakerInformation].slice(0, 2);
  }

  // Add the "MORE"/"LESS" button based on the screen width
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    if (shouldBeExpanded) {
      btn = seeFewerSpeakersButton;
    } else {
      btn = seeMoreSpeakersButton;
    }
  }

  const listItems = speakers.map((speaker) => generateSingleSpeakersMarkup(speaker));

  // Return the speakers markup with the button
  return `
      <div class="speakers-section">
        ${listItems.join('\n')}
      </div>
      ${btn}
    `;
};

const speakersTarget = document.querySelector('.Speaker-content');

const mountSpeakersList = () => {
  const isMobile = window.innerWidth < 768;
  const shouldBeExpanded = !isMobile || speakersTarget.getAttribute('data-expanded') === 'false';

  speakersTarget.setAttribute('data-expanded', shouldBeExpanded);
  speakersTarget.innerHTML = generateAllSpeakersMarkup(shouldBeExpanded);
};

const handleButtonClick = (e) => {
  if (e.target.id === 'see-more-speakers-btn') {
    speakersTarget.setAttribute('data-expanded', true);
    speakersTarget.innerHTML = generateAllSpeakersMarkup(true);
  } else if (e.target.id === 'see-fewer-speakers-btn') {
    speakersTarget.setAttribute('data-expanded', false);
    speakersTarget.innerHTML = generateAllSpeakersMarkup(false);
  }
};

// Add event listener to the "MORE"/"LESS" buttons
speakersTarget.addEventListener('click', handleButtonClick);

// Add event listener to the window's resize event
window.addEventListener('resize', mountSpeakersList);

// Mount the speakers' list initially
mountSpeakersList();
