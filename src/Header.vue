<template v-cloak>
    <div class="header">
        <div class="title">{{ test }}</div>
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

    },
    created() {

    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #20242F;
    color: #fff;
    padding: 20px 20px 10px;
}
</style>
