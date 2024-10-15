import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/Story/StoryPage.css'

const StoryPage = () => {
  const location = useLocation();
  const { section } = location.state || {};

  const getContent = () => {
    switch (section) {
      case 'left':
        return {
          title: 'First Story',
          subtitle: 'LEFT SECTION',
          description: 'Discover the beauty of our first tale, where moments of truth unfold.',
          image: require('../../img/hero/read-book.jpg'),
          fullContent: `
            Here is the full content of the First Story. This is where you would put the complete
            narrative, expanding on the brief description provided in the TalesComponent.
            You can add multiple paragraphs, images, or any other content relevant to this story.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          `
        };
      case 'right':
        return {
          title: 'Second Story',
          subtitle: 'RIGHT SECTION',
          description: 'Explore our collection of captivating stories that reveal divine truths through everyday moments.',
          image: require('../../img/hero/photoshoot.jpg'),
          fullContent: `
            Here is the full content of the Second Story. This section would contain the complete
            narrative for the story introduced in the right section of the TalesComponent.
            You can include detailed storytelling, character development, and thematic exploration here.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          `
        };
      default:
        return {
          title: 'Story Not Found',
          subtitle: 'ERROR',
          description: 'The requested story could not be found.',
          image: null,
          fullContent: 'We apologize, but the story you are looking for is not available.'
        };
    }
  };

  const content = getContent();

  return (
    <div className="story-page">
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      {content.image && <img src={content.image} alt={content.title} className="story-image" />}
      <p>{content.description}</p>
      <div className="full-content">
        {content.fullContent.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default StoryPage;