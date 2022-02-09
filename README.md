## 👋 Hey there
Welcome to the **[PsychHack-talk](https://www.psych-hack.tech/)** repo.

### What is it?
This repository is being used at session for most of the events which involves portfolio building using **NextJS** and **Storyblok**
**Note**: As said, being used at session, it means, the name of the repo depends on the event, and hence,`[eventName]-talk` is the nomenclature.

You can find my upcoming events at [abirpal.dev](https://abirpal.dev) to keep track of my events. 

### Want to have this talk on your event?
Reach out to me on twitter: [@imabptweets](https://twitter.com/imabptweets)


### Installation Steps
1. Clone the Repo
2. Run: `npm i`
3. Create a new file `.env.local` as per `.env.sample` and get required tokens from Storyblok.
4. Run: `npm run dev`
### Whats inside this repo.

- NextJS + Tailwind Customized Setup for upcoming talk.
- Storyblok Wrapper = `src/lib/storyblok.ts`
    - Used for fetching and customizing the data from storyblok 
- ENV Setup
    - Take a Look at .env.sample to know more. 
    - Use `STORYBLOK_VERSION = "draft"` in development
    - Use `STORYBLOK_VERSION = "published"` in production

### Contributions
- Found any bug, please create a new [issue](https://github.com/imabp/PsychHack-talk/issues/new?assignees=&labels=bug&template=bug.md) before working on the solution.

- As this is only used for events and talks, introducing feature doesn't gurantee, if it will be merged or not, based on event nature and demand. 
Its recommended to avoid raising requests for new features  due to above reason.

