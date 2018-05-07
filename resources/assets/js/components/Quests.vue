<template>
    <div class="quests--container">
        <div class="quests--wrap">
            <h1 class="quests__title">Quest Log</h1>

            <div class="quests--flex">
                <div class="quest-list">
                    <template v-for="quest in quests">
                        <span class="quest-list__title" @click="setSelectedQuest(quest.project)">{{ quest.questName }}</span>
                    </template>
                    <a class="quest-list__title-github" target="_blank" href="https://github.com/DefrostedTuna?tab=repositories">More quests...</a>
                </div>
                <div class="quest-details">
                    <h2 class="quest-details__title">{{ selectedQuest.questName }}</h2>

                    <span class="quest-details__project-name--title">Project name</span>
                    <p class="quest-details__project-name">{{ selectedQuest.project }}</p>

                    <template v-if="selectedQuest.description instanceof Array">
                        <p v-for="paragraph in selectedQuest.description"
                           class="quest-details__description">
                            {{ paragraph }}
                        </p>
                    </template>
                    <p v-else>
                        {{ selectedQuest.description }}
                    </p>

                    <h2 class="quest-details__rewards">Rewards</h2>
                    <div class="rewards--flex">
                        <div class="rewards__skills">
                            <span class="rewards__category-title">Skillups</span>
                            <span v-for="skill in selectedQuest.rewards.skills" class="reward__item">{{ skill }}</span>
                        </div>
                        <div class="rewards__frameworks">
                            <span class="rewards__category-title">Framework Profeciency</span>
                            <span v-for="framework in selectedQuest.rewards.frameworks" class="reward__item">{{ framework }}</span>
                        </div>
                    </div>

                    <div v-if="selectedQuest.link" class="quest-details__link--wrap">
                        <a :href="selectedQuest.link" target="_blank" class="quest-details__link">{{ selectedQuest.link }}</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedQuest: null,
                quests: [
                    {
                        project: 'Gozer',
                        questName: 'To Destroy A Device',
                        description: [
                            `The Gozer ecosystem was designed to be a replacement for a third party hard drive shredding
                             solution that was being used by Geek Squad City. The application integrates with
                             Active@ KillDisk to provide an inventory and reporting system for shredded hard drives,
                             solid states, and other storage media.`,

                            `Themed after Gozer the Destructor from Ghost Busters, Gozer, the main application,
                            is an inventory and reporting system designed to track mass storage erasure.
                            Coupled with this are the Destroyers; server chassis with enough I/O for 45 devices each,
                            which run the KillDisk software used for the shredding of mass storage devices.
                            The Destroyers will export XML reports that, with the help of a sync server running various
                            custom scripts, send the data to the main Gozer application to match the reports with
                            devices in inventory via serial number. Accompanying this are Raspberry Pi\'s running a
                            program designed to perform a quick evaluation of the health of a storage device.
                            The quick check application helps to reduce time and catch errors early in the process to
                            avoid any unnecessary processing of failed devices.`,

                            `Implementing this solution with the business saved the company approximately $800,000
                            per year in cost savings, and in the first year of deployment, doubled production.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                                'HTML',
                                'CSS',
                                'SASS',
                                'Javascript',
                                'Python',
                                'Bash',
                            ],
                            frameworks: [
                                'Laravel',
                                'Vue',
                                'Materialize',
                                'Symfony',
                            ]
                        }
                    },
                    {
                        project: 'Major Tom',
                        questName: 'Bet You Won\'t Like This API',
                        description: [
                            `Major Tom is a reporting dashboard designed as a replacement for a legacy
                            application that was built using Quartz Composer. It pulls data from reports generated by
                            systems in use at Geek Squad City, correlates the relevant data, and displays what is important
                            to management for successfully keeping turn time and redo rates at a minimum.
                            Built using Laravel as a back end for future upgrades, it also leverages Vue and Vuetify
                            for the front end to make for a professional and presentable experience.
                            Some of the challenges presented with this application are the use of non-standard datasets
                            that are inconsistent, and the need to convert XML to JSON data.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                                'HTML',
                                'CSS',
                                'Javascript',
                            ],
                            frameworks: [
                                'Laravel',
                                'Vue',
                                'Vuetify',
                            ]
                        }
                    },
                    {
                        project: 'LUAU',
                        questName: 'One Auth to Rule Them All',
                        description: [
                            `LUAU is a custom OAUTH solution born out of necessity. With the growing number of
                            applications being built for Geek Squad City, a need to unify user credentials became a
                            primary concern. LUAU is an acronym for Local User Authentication Utility.
                            The application acts as both a roster for all current employees, as well as a gateway for
                            application access that can be granted or revoked at any time by management.
                            Employee details are stored so that they may be used throughout the facility via an API.`,

                            `If an employee belongs to a certain department and needs access to various applications
                            used in said department, a manager will be able to give them access to only the subset
                            that are needed. If the employee changes roles in the facility, the access can be revoked
                            for security purposes, and new privileges granted for the access they need in their new role.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                                'HTML',
                                'CSS',
                                'SASS',
                                'Javascript',
                            ],
                            frameworks: [
                                'Laravel',
                                'Vue',
                                'Vuetify',
                            ]
                        }
                    },
                    {
                        project: 'DERP',
                        questName: 'What Shall We Call This One?',
                        description: [
                            `Currently a work in progress, and also an unofficial name, DERP is an acronym for
                            Dynamic Employee Review Program. This is designed to work alongside LUAU as a hub for
                            employee reviews. DERP will pull data from LUAU's API, match employees and their
                            respective managers, and handle monthly, quarterly, and annual appraisals for more
                            than 700 users. Aimed at being a replacement for the current method of passing excel
                            spreadsheets around internally, DERP will provide a much more stable, and consistent
                            method for delivering performance reviews to employees.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                                'HTML',
                                'CSS',
                                'SASS',
                                'Javascript',
                            ],
                            frameworks: [
                                'Laravel',
                                'Vue',
                                'Vuetify',
                            ]
                        }
                    },
                    {
                        project: 'Alnus',
                        questName: 'And Thus The Japanese Self-Defense Force Fought',
                        description: [
                            `Designed to work alongside Laravel's Gate system, Alnus is a personal library built to add
                            role-based ACL to projects. It is a lightweight, standalone package without all of the
                            unused features included in larger, more well known libraries. Require it via composer into
                            a project, include the trait on the user model, and you're good to go! I've used this
                            package for all of my applications built during my time at Geek Squad City and have
                            tailored it to fit my needs as new issues and challenges arise.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                            ],
                            frameworks: [
                                'Symfony',
                            ]
                        },
                        link: 'https://github.com/DefrostedTuna/alnus'
                    },
                    {
                        project: 'Uptilt Weather',
                        questName: 'Two API\'s, One Map',
                        description: [
                            `A simple weather application like any other, Uptilt Weather is pretty much the same but
                            without all of the bloat found in more mainstream applications. I built this to satisfy
                            an itch of mine when it comes to weather apps. See, I really like to have a radar when I
                            look at the weather so that I can check where any incoming fronts are. Most services either
                            don't have this, or they have such a bloated version of it that it takes an incredibly
                            long time to load. I've taken a third party weather API and created a simple daily outlook
                            of the highs, lows, and what the weather is expected to look like. However, I've also
                            integrated Google Maps and a third party tileserver to pull radar data and overlay them on
                            top of each other. This gives me a quick snapshot of both the current and future
                            temperatures, as well as a visual representation of where any incoming fronts are located.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                                'HTML',
                                'CSS',
                                'Javascript',
                            ],
                            frameworks: [
                                'Laravel',
                                'Vue',
                                'Materialize',
                            ]
                        },
                        link: 'http://app.uptilt.io/uptilt-weather/',
                    },
                    {
                        project: 'Uptilt Quotes',
                        questName: 'Scratching An Itch',
                        description: [
                            `Uptilt Quotes is one of my earlier projects put together for personal use. I always
                            fathomed that I would create a dashboard of some kind that needed to pull quotes from an API.
                            When I built this application, I had trouble finding a reliable, easy to use API for this task.
                            The solution? Why not build my own? Uptilt Quotes allows for open access to submit quotes
                            from any user without needing to sign up for an account somewhere. This is partly due to my
                            disliking the need to sign up for every trivial thing, but also as an experiment of sorts.
                            I thought it would be interesting to see what types of things users would submit without
                            being hindered by an account in any way.`,
                        ],
                        rewards: {
                            skills: [
                                'PHP',
                                'HTML',
                                'CSS',
                                'SASS',
                                'Javascript',
                            ],
                            frameworks: [
                                'Laravel',
                                'Vue',
                                'Materialize',
                            ]
                        },
                        link: 'http://app.uptilt.io/uptilt-quotes/',
                    },
                ],
            }
        },

        methods: {
            setSelectedQuest(projectName) {
                this.selectedQuest = this.quests.filter(quest => {
                    return quest.project == projectName;
                })[0];
            }
        },

        created() {
            this.setSelectedQuest('Gozer'); // default to the first item in the quests list
        }
    }
</script>

<style lang="scss" type="text/scss">
    .quests--container {
        background: #add1ec;
        min-height: 100vh;
        padding-top: 75px;
    }

    .quests--wrap {
        margin: auto;
        max-width: 1200px;
        padding: 16px;
    }

    .quests__title {
        font-family: 'Berkshire Swash', serif;
        color: #0f3147;
        text-align: center;
        margin-bottom: 32px;
        font-size: 40px;
    }

    .quests--flex {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        @media(min-width: 801px) {
            flex-wrap: nowrap;
        }
    }

    .quest-list {
        color: #0f3147;
        font-size: 22px;
        width: 100%;
        padding: 16px;
        text-align: center;

        @media(min-width: 801px) {
            width: 30%;
            min-width: 300px;
            text-align: right;
        }
    }

    .quest-list__title {
        display: block;
        font-family: 'Lato', serif;
        padding-top: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid #0f3147;
        color: #0f3147;

        &:hover {
            cursor: pointer;
        }

        @media(min-width: 801px) {
            //
        }
    }

    .quest-list__title-github {
        @extend .quest-list__title;
        border-bottom: none;
        color: #0f3147 !important;
        text-decoration: none;
    }

    .quest-details {
        width: 100%;
        text-align: center;
        padding: 16px;
        color: #0f3147;
        background: white;
        border: 2px solid #0f3147;

        @media(min-width: 801px) {
            width: 70%;
        }
    }

    .quest-details__title,
    .quest-details__rewards {
        font-family: 'Berkshire Swash', serif;
        font-size: 26px;
        margin-bottom: 16px;
        color: #0f3147;

        @media(min-width: 801px) {
            font-size: 32px;
        }
    }

    .quest-details__project-name--title {
        font-family: 'Lato', serif;
        font-size: 14px;
        color: #0f3147;

        @media(min-width: 801px) {
            font-size: 18px;
        }
    }

    .quest-details__project-name {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        color: #0f3147;

        @media(min-width: 801px) {
            font-size: 22px;
        }
    }

    .quest-details__description {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        color: #0f3147;

        @media(min-width: 801px) {
            font-size: 22px;
        }
    }

    .rewards--flex {
        display: flex;
        margin-bottom: 16px;
        justify-content: space-around;
    }

    .rewards__category-title {
        display: block;
        font-family: 'Lato', serif;
        font-size: 14px;
        color: #0f3147;
        margin-bottom: 8px;

        @media(min-width: 801px) {
            font-size: 18px;
        }
    }

    .rewards__skills,
    .rewards__frameworks {
        //
    }

    .reward__item {
        display: block;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 14px;
        color: #0f3147;

        @media(min-width: 801px) {
            font-size: 16px;
        }
    }

    .quest-details__link--wrap {
        border-top: 1px solid #0f3147;
        padding: 16px;
    }

    .quest-details__link {
        font-family: 'Berkshire Swash', serif;
        font-size: 14px;
        border-bottom: none;
        color: #0f3147 !important;
        text-decoration: none;
        font-size: 22px;
    }
</style>