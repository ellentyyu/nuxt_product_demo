<template>
    <form @submit.prevent id="survey">
        <!-- 題組 -->
        <div 
            v-for="(group, groupId) in groupedQuestions"
            :key="groupId"
            :class="{'form-question-group': group.length > 1}"
        >
            <!-- 題目 -->
            <ProductPageFormQuestion
                v-for="question in group"
                :key="question.key"
                :question="question"
                v-model:answers="answers"
                v-model:otherAnswers="otherAnswers"
            />
        </div>
    </form>
</template>

<script setup>
const emit = defineEmits(['surveyResult']);

const productStore = useProductStore();
const surveyId = computed(() => productStore.mainProductData.try_questionnaire_id);

const answers = ref({});
const otherAnswers = ref({});
const accectQuestionType = ['1', '2', '5', '7']; 
const questionData = computed(() => productStore.questionData);

watch(questionData, (val) => {
    initAnswers();
});

// 過濾目前有做的題型
const filteredQuestionData = computed(() => {
    return questionData.value.filter(q => accectQuestionType.includes(q.type));
});

// 照題組分組 頁面顯示用
const groupedQuestions = computed(() => {
    const groups = {};
    filteredQuestionData.value.forEach(question => {
        if (!groups[question.groupid]) {
            groups[question.groupid] = [];
        }
        groups[question.groupid].push(question);
    });
    return groups;
});


// 必填問題
const requiredQuestions = computed(() => filteredQuestionData.value.filter(question => question.q_required === 'checked'));
// 已回答的必填問題數
const filledRequiredNum = computed(() => requiredQuestions.value.reduce((count, question) => {
    const answer = answers.value[question.key];
    return count + ((Array.isArray(answer) && answer.length > 0) || 
    (typeof answer === 'string' && answer !== '') ? 1 : 0);
}, 0));

const checkHasEmptyField = () => {
    const emptyFields = filteredQuestionData.value.filter((question) => {
        // 必填不能為空白
        const answer = answers.value[question.key];
        if (question.q_required === 'checked') return (Array.isArray(answer) && answer.length === 0) || answer === '';
        return false;
    });

    if (emptyFields.length > 0) return false;
    return true;
};

const submitSurvey = async() => {
    if (!checkHasEmptyField()) return;

    const surveyAnswer = questionData.value
    .filter((question) => question.type !== '7')
    .map((question) => {
        let answer = answers.value[question.key];
        // 整理其他選項格式
        if (question.other_option) {
            const otherText = otherAnswers.value[question.key] || '';

            if (typeof answer === 'string') {
                if (answer === question.other_option) {
                    answer = `${answer}-${otherText}`;
                }
            } else if (Array.isArray(answer)) {
                answer = answer.map(item => {
                    if (item === question.other_option) {
                        return `${item}-${otherText}`;
                    }
                    return item;
                });
            }
        }
        
        return {
            title: question.title,
            key: question.key,
            type: mapInputType(question.type),
            answer: answer
        };
    });

    emit('surveyResult', true);
};

const mapInputType = (type) => {
    switch (type) {
        case '1': 
            return 'radio';
        case '2':
            return 'checkbox';
        case '5':
            return 'text';
        case '6':
            return '6';
    }
};

// 初始化答案格式/清空表單
const initAnswers = () => {
    questionData.value.forEach((question) => {
        if (question.type === '2') {
            answers.value[question.key] = [];
        } else if (!accectQuestionType.includes(question.type) && question.q_required === 'checked') {
            // 沒有做但必填的題型需給假答案
            answers.value[question.key] = 1;
        } else {
            answers.value[question.key] = '';
        }
    });
};

onMounted(() => {
    initAnswers();
});

onBeforeUnmount(() => {
    initAnswers();
});

defineExpose({
    requiredQuestions,
    filledRequiredNum,
    submitSurvey,
    initAnswers
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/modal';
</style>