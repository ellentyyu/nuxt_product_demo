<template>
    <div 
        class="form-question"
        :class="{'not-group': question.type !== '7'}"
    >
        <!-- 選擇題標題 -->
        <h4 
            v-if="!isInputType"
            :class="{'group-title': question.type === '7'}"
        >
            <span v-if="question.q_required === 'checked'">*</span>
            {{ question.title }}
        </h4>
        <!-- 非選題標題 -->
        <label 
            v-else
            :for="question.key" 
            class="input-type-label"
        >
            <span v-if="question.q_required === 'checked'">*</span>
            {{ question.title }}
        </label>
      
        <!-- 單選/複選選項 -->
        <template v-if="!isInputType">
            <div 
                v-for="(option, index) in question['q_option[]']"
                :key="option"
                class="form-item"
                :class="typeInText"
            >
                <label :for="question.key + index" >
                    <input
                        :type="typeInText"
                        :id="question.key + index"
                        :name="question.key"
                        :value="option"
                        v-model="answers[question.key]"
                        :required="isRequired"
                    />
                    <span class="marker">
                        <span class="point"></span>
                    </span>
                    {{ option }}
                </label>
            </div>
            <!-- 其他選項 -->
            <div 
                v-if="question.other_option"
                class="form-item"
                :class="typeInText"
            >
                <label :for="`${question.key}-other`" >
                    <input
                        :type="typeInText"
                        :id="`${question.key}-other`"
                        :name="question.key"
                        :value="question.other_option"
                        :required="isRequired"
                        v-model="answers[question.key]"
                    />
                    <span class="marker">
                        <span class="point"></span>
                    </span>
                    {{ question.other_option }}
                </label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入"
                    :id="`${question.key}-other-text`"
                    :name="`${question.key}-other-text`"
                    v-model="otherAnswers[question.key]"
                />
            </div>
        </template>
        <!-- 單行填答 -->
        <template v-else>
            <div class="form-item">
                <input 
                    type="text"
                    class="form-control"
                    placeholder="請輸入"
                    v-model="answers[question.key]"
                    :id="question.key"
                    :required="question.q_required === 'checked'"
                >
            </div>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    question: Object
});

const answers = defineModel('answers');
const otherAnswers = defineModel('otherAnswers');

// 以下兩個watch是為了讓其他的勾選和輸入框同步
watch(() => answers.value[props.question.key], (answer) => {
    if (!props.question.other_option) return;

    // 所選選項不含其他時 清空文字填答
    if (props.question.type === '1' && answer !== props.question.other_option) {
        otherAnswers.value[props.question.key] = '';
    } else if (props.question.type === '2' && !answer.includes(props.question.other_option)) {
        otherAnswers.value[props.question.key] = '';
    }
});

watch(() => otherAnswers.value[props.question.key], (answer, oldAnswer) => {
    // 其他選項的文字填答 沒填->有填且尚未選其他時 勾選其他
    if (!oldAnswer && answer) {
        if (props.question.type === '1' && answers.value[props.question.key] !== props.question.other_option) {
            answers.value[props.question.key] = props.question.other_option;
        } else if (props.question.type === '2' && !answers.value[props.question.key].includes(props.question.other_option)) {
            answers.value[props.question.key].push(props.question.other_option);
        }
    }
});

const isInputType = computed(() => props.question.type === '5');

// 利用加上required屬性來顯示必填提示
// checkbox需手動檢查有無答案來判斷是否加required
const isRequired = computed(() => {
    if (props.question.type === '2') return hasCheckboxAnswer.value;
    return props.question.q_required === 'checked';
});

const hasCheckboxAnswer = computed(() => props.question.q_required === 'checked' && answers.value[props.question.key]?.length === 0);

const typeInText = computed(() => {
    switch (props.question?.type) {
        case '1': 
            return 'radio';
        case '2':
            return 'checkbox';
        default:
            return '';
    }
});

</script>

<style lang="scss" scoped>
@import '@/assets/styles/modal';
</style>