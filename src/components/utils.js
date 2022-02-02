export const renderLoading = (isLoading, curButton) => {
    if (isLoading) {
        curButton.textContent = "Сохранение...";
    } else {
        curButton.textContent = "Сохранить";
    }
};