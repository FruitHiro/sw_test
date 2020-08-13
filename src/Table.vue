<template v-cloak>
    <div class="table-container" v-if="data.length > 0">
        <table>
            <thead>
                <tr>
                    <th v-for="(value, name, i) in data[0]" :key="name" v-if="i < 8">{{ name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in data" :key="i">
                    <td v-for="(val, key, i) in item" :key="i" v-if="i < 8">{{ val }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            required: true,
            type: Array,
            default: () => ([]),
        },
    },
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
.table-container {
    overflow-x: auto;
}
th {
    background-color: #20242F;
    color: #fff;
    text-align: left;
    padding: 16px;

    &::first-letter {
        text-transform: uppercase;
    }
}
td {
    padding: 16px;
    white-space: nowrap;
}
tbody tr:nth-child(2n) td{
    background-color: #F9FAFC;
    border-top: 2px solid #E6E7E9;
    border-bottom: 2px solid #E6E7E9;
}
</style>