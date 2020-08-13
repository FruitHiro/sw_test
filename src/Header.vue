<template v-cloak>
    <div class="header">
        <div class="title">{{ tab }}</div>
        <button type="button" class="btn" v-if="tab === 'Starships'">
            <img src="img/compare.svg" class="btn-icon">Сравнить
        </button>
    </div>
</template>

<script>
export default {
    name: 'Header',
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
        }
    },
    created() {

    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    background-color: #20242F;
    color: #fff;
    padding: 20px 20px 10px;
}
</style>
