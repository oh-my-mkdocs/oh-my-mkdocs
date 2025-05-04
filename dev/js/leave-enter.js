const title = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "等您回来😭 " + title;
    } else {
        document.title = "欢迎回来！！！" + title;
        setTimeout(() => {
            document.title = title;
        }, 1500);
    }
});