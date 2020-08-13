<template v-cloak>
    <div class="main-container">
        <Sidenav />
        <div class="main">
            <Header />
            <Table :data="info" />
        </div>
        <Column-control />
    </div>
</template>

<script>
import Sidenav from './Sidenav.vue';
import Header from './Header.vue';
import Table from './Table.vue';
import ColumnControl from './ColumnControl.vue';

export default {
    name: 'Main',
    components: {
        Sidenav,
        Header,
        Table,
        ColumnControl,
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
            return this.$store.state.data[this.tab.toLowerCase()].results;
        }
    },
    created() {

    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    height: 100%;
}
.main {
    display: flex;
    flex-direction: column;
    width: calc(100% - 420px);
}
</style>