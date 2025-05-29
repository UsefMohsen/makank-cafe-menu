document.addEventListener('DOMContentLoaded', () => {
    try {
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        if (!toggleButtons.length) {
            console.error('لم يتم العثور على أزرار منسدلة. تأكد من وجود الكلاس "toggle-btn" في الـ HTML.');
            return;
        }

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('.toggle-icon');
                if (!content || !icon) {
                    console.error('لم يتم العثور على المحتوى أو الأيقونة للزر المنسدل.');
                    return;
                }

                content.classList.toggle('hidden');
                icon.classList.toggle('active');
                button.setAttribute('aria-expanded', content.classList.contains('hidden') ? 'false' : 'true');
                console.log(`تم تبديل القسم: ${button.textContent.trim()}`);
            });
            button.setAttribute('aria-expanded', 'false');
        });

        console.log('تم تهيئة وظيفة المنسدلات بنجاح.');
    } catch (error) {
        console.error('خطأ أثناء تهيئة وظيفة المنسدلات:', error);
    }
});

function closeAllSections() {
    const contents = document.querySelectorAll('.menu-content');
    const icons = document.querySelectorAll('.toggle-icon');
    const buttons = document.querySelectorAll('.toggle-btn');

    contents.forEach(content => content.classList.add('hidden'));
    icons.forEach(icon => icon.classList.remove('active'));
    buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
}

closeAllSections();