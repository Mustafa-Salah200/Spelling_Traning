import { createContext, useEffect, useState } from "react";

export const StoriesProvider = createContext();
const GetData = JSON.parse(window.localStorage.getItem("MyStories"));

function ContextStories(props) {
  const [stories, setStories] = useState(
    GetData || [
      {
        id: 202311662,
        title: "The Author",
        text: `This Web Application is created by Mustafa SalahAldin, he is a software engineer. he create this application to help people who have trouble with spelling`,
      },
      {
        id: 202311585,
        title: "The Lion and the Rabbit",
        text: `A cruel lion lived in the forest. Every day, he killed and ate a lot of animals. The other animals were afraid the lion would kill them all. The animals told the lion, Let's make a deal. If you promise to eat only one animal each day, then one of us will come to you every day. Then you don't have to hunt and kill us. The plan sounded well thought-out to the lion, so he agreed, but he also said, If you don't come every day, I promise to kill all of you the next day! Each day after that, one animal went to the lion so that the lion could eat it. Then, all the other animals were safe. Finally, it was the rabbit's turn to go to the lion. The rabbit went very slowly that day, so the lion was angry when the rabbit finally arrived. The lion angrily asked the rabbit, Why are you late? I was hiding from another lion in the forest. That lion said he was the king, so I was afraid. The lion told the rabbit, I am the only king here! Take me to that other lion, and I will kill him. The rabbit replied, I will be happy to show you where he lives. The rabbit led the lion to an old well in the middle of the forest. The well was very deep with water at the bottom. The rabbit told the lion, Look in there. The lion lives at the bottom. When the lion looked in the well, he could see his own face in-the water. He thought that was the other lion. Without waiting another moment, the lion jumped into the well to attack the other lion. He never came out. All of the other animal in the forest were very pleased with the rabbit's clever trick.`,
      },
      {
        id: 23233235,
        title: "The Baboratory",
        text: "Mia's father had a laboratory, but she had no idea what was in it. Her dad always closed and locked the door when he went in. She knew that he used it to do projects for work. He never told Mia what these projects were.One night, Mia approached the door to the laboratory. She stopped and thought, I wonder what crazy experiment he is doing now. Suddenly, she heard a loud noise. It sounded like an evil laugh. The noise scared her, so she walked quickly back to her room. The next night, her friend Liz came to her house. When Liz arrived, Mia told her about the night before. Oh, it was terrible, she said.Why don't we see what is in there? Liz asked. It will be a fun adventure! Mia felt nervous about going into her father's laboratory, but she agreed. As always, the door was locked. They waited until Mia's father left the laboratory to eat dinner. He didn't lock the door! Liz said. Let's go. The laboratory was dark. The girls walked down the stairs carefully. Mia smelled strange chemicals. What terrible thing was her father creating? Suddenly, they heard an evil laugh. It was even worse than the one Mia heard the night before. What if a monster was going to kill them? Mia had to do something. She shouted for help.Mia's father ran into the room and turned on the lights. Oh, no, he said. You must have learned my secret.Your monster tried to kill us, Mia said. Monster? he asked. You mean this? He had a pretty doll in his hands. The doll laughed. The laugh didn't sound so evil anymore. I made this for your birthday. I wanted to give it to you then, but you can have it now. I hope you like it",
      },
      {
        id: 202311477,
        title: "The Jackal and the Sun Child",
        text: `A jackal is a wild dog with a big black back. It resides in the desert. But how did the jackal get his black back? This was how it happened. One day, the jackal saw a girl. She was sitting upon a rock. She was not a normal child. She was a rare and beautiful sun child. She was bright and warm like the sun. The child saw the jackal and smiled. She said, Jackal, I have been relaxing on this rock for too long. I must get home soon. But, I am slow and you are fast. You will likely get me home more quickly. Then she requested, Will you carry me home? If you do, I'll give you a gift. This necklace belongs to me, but I will give it to you. The wild jackal agreed. So the sun child sat on the dog's back. They started to walk. But soon, the jackal felt ill. The sun child was very hot on his back. The heat was hurting his back very badly. “I made a terrible error in judgment. he thought. He shouldn't have agreed to carry her. So he asked her to get off. But she did not. The jackal's back continued to get hotter and hotter. He had to get away from the sun child. So he made a plan. First, he ran as fast as he could. He hoped the sun child would fall off. But she did not. So when the sun child was looking at the sky, not aware of the jackal's next plan, he jumped into a field of flowers. As a result, the child rolled off his back. The jackal ran away. But the sun child left a mark on the jackal's back, a visible black mark. Ever since his experience with the sun child, the jackal has had a black back.`,
      },
      {
        id: 202311599,
        title: "The Dog's Bell",
        text: `John's dog was a bad dog. He bit people frequently. John had great concern about this. It was not an appropriate way for a dog to behave. His friends in the village always expected the dog to bite them. The news about John's dog spread through the village. None of the people wanted to go to John's house. John tried to instruct the dog to behave, but it never worked. He tried to be patient and teach the dog to be calm. That also didn't work. John didn't want to punish the dog. How will I stop my dog's bad habit? John asked himself. John's friend came to talk to him about the issue. During their important meeting, his friend said, The people in the village asked me to represent them. We want your dog to stop this habit. Why don't you put a bell around the dog's neck? This way, we would hear your dog coming down the street. John thought this was a great idea. Now, people could stay away from the dog. It would not be able to bite anyone anymore. The dog liked the bell, too. People looked at him when they heard his bell. This made the dog very content. He liked the song the bell played when he walked. One day, John's dog strolled through the village and met some other dogs. He expected them to want a bell like his. But they laughed at his bell. They said the bell made people avoid him. John's dog shook his head. No, they look at me because they like the bell. The other dogs said, You have the wrong idea of what makes you popular. Of course they like your bell. It tells them where you are so they can avoid you. You aren't able to bite them anymore! You see, being popular isn't something positive when it's for the wrong reason.`,
      },
    ]
  );

  const [activeStory, setActiveStory] = useState({
    id: 202312308,
    title: "The Report",
    text: "Lee sat among the books at the library and thought about his group project. They had to turn it in soon, but he hadn't even started his part! Jack and Claire were in his group. They had worked hard. They were also very smart, and Lee didn't want them to get a bad grade. Jack did the report. He wrote a lot of very good sentences and described things with great adjectives. Claire drew a nice map of the stars. Now, Lee needed to do his part of the project. Well, I suppose I need to start my model, Lee thought. Making a model of a planet was really hard. Lee tried to read several books, but he couldn't comprehend any of the charts. We're going to fail because of me! Lee said. He put his head down on the table and said, I wish I could see a planet, instead of having to read about it! Suddenly, there was a bright light. Lee was pulled from his chair, through the roof, and right into a strange ship! Hello, kid, said an alien. Did you ask for help? Lee told the friendly alien all about his project. The alien agreed to help Lee solve his problem. First, we'll fly through space to view the universe. Then, I can help you make a model of my planet. Soon, they were going through the clouds. They passed the moon. Then they viewed Mars. Lee was very excited. Instead of a bad grade, his group would have the best project ever! It's time to go home, the alien finally said. On the way back, he helped Lee make a model of the planet Mars. Soon, they were on Earth.Thanks, Lee said. My model will be awesome! Then he took his model and said goodbye to his new friend",
  });

  const AddStory = (newstory) => {
    return setStories([...stories, newstory]);
  };
  const RemoveStory = (delstory) => {
    const newStories = stories.filter((ele) => ele.id !== delstory.id);
    return setStories(newStories);
  };
  const UpdateStory = (updatestory) => {
    const newStories = stories.map((ele) => {
      if (ele.id === updatestory.id) {
        ele = updatestory;
      }
      return ele;
    });
    return setStories(newStories);
  };
  const SetActive = (active) => {
    return setActiveStory(active);
  };
  useEffect(() => {
    window.localStorage.setItem("MyStories", JSON.stringify(stories));
  }, [stories]);
  return (
    <StoriesProvider.Provider
      value={{
        stories,
        activeStory,
        AddStory,
        SetActive,
        RemoveStory,
        UpdateStory,
      }}
    >
      {props.children}
    </StoriesProvider.Provider>
  );
}

export default ContextStories;
