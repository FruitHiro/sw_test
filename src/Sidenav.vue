<template v-cloak>
    <div class="sidenav">
        <div class="sidenav-logo">
            <img class="logo" src="img/image.svg" alt="image">
        </div>
        <ul class="nav">
            <li class="nav-link title" :class="{ 'active': tab === 'Starships'}" @click="changeTab('Starships')">
                <span>{{ info.starships.count}}</span> Starships
            </li>
            <li class="nav-link title" :class="{ 'active': tab === 'Planets'}" @click="changeTab('Planets')">
                <span>{{ info.planets.count}}</span> Planets
            </li>
            <li class="nav-link title" :class="{ 'active': tab === 'People'}" @click="changeTab('People')">
                <span>{{ info.people.count}}</span> People
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidenav',
    components: {

    },
    data() {
        return {
            test: 'Text',
        };
    },
    computed: {
        tab() {
            return this.$store.state.tab;
        },
        info() {
            return this.$store.state.data;
        }
    },
    created() {

    },
    methods: {
        changeTab(tabName) {
            this.$store.commit('updateTab', tabName);
        }
    },
};
</script>

<style lang="scss" scoped>
.sidenav {
    display: flex;
    flex-direction: column;
    background-color: #313745;
    color: #fff;
    width: 130px;

    &-logo {
        padding-top: 20px;
        padding-bottom: 16px;
    }
}
.logo {
    display: block;
    margin: auto;
}
.nav-link {
    padding: 14px;
    border-bottom: 1px solid #1F242F;
    cursor: pointer;

    &.active,
    &:hover {
        background-color: #272D3B;
    }

    & span {
        display: block;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 3px;
    }
}
</style>