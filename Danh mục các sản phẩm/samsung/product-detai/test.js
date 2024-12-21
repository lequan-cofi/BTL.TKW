// Thêm sự kiện cho các nhóm tùy chọn
document.querySelectorAll('.option-group').forEach(group => {
    group.addEventListener('click', function(event) {
        // Tìm tùy chọn được nhấp
        const clickedOption = event.target.closest('.option');
        if (!clickedOption) return; // Thoát nếu không nhấp vào .option

        // Xóa lớp "selected" khỏi tất cả tùy chọn trong nhóm
        group.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Thêm lớp "selected" vào tùy chọn được nhấp
        clickedOption.classList.add('selected');
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     // Lấy tất cả các phần tử img-item
//     const imgItems = document.querySelectorAll('.img-item a');
//     const mainImage = document.getElementById('main-image');

//     // Thêm sự kiện click vào từng img-item
//     imgItems.forEach(item => {
//         item.addEventListener('click', (event) => {
//             event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
//             const imgSrc = item.querySelector('img').src; // Lấy đường dẫn ảnh của img-item
//             mainImage.src = imgSrc; // Thay đổi src của ảnh chính
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const imgItems = document.querySelectorAll('.img-item a');
    const mainImage = document.getElementById('main-image');

    imgItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
            const imgSrc = item.querySelector('img').src; // Lấy đường dẫn ảnh của img-item

            // Thêm hiệu ứng trượt trái
            mainImage.style.transform = 'translateX(-100%)';
            mainImage.style.opacity = '0';

            // Thay đổi ảnh chính sau khi hiệu ứng kết thúc
            setTimeout(() => {
                mainImage.src = imgSrc;
                mainImage.style.transform = 'translateX(0)';
                mainImage.style.opacity = '1';
            },500); // Delay khớp với thời gian của transition (0.5s)
        });
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const imgItems = document.querySelectorAll('.img-item a'); // Tất cả ảnh nhỏ
//     const mainImage = document.getElementById('main-image'); // Ảnh chính

//     imgItems.forEach(item => {
//         item.addEventListener('click', (event) => {
//             event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
//             const imgSrc = item.querySelector('img').src; // Lấy đường dẫn của ảnh được chọn

//             // Trượt ảnh hiện tại sang phải và làm mờ
//             mainImage.style.transform = 'translateX(100%)';
//             mainImage.style.opacity = '0';

//             // Thêm ảnh mới sau khi ảnh hiện tại trượt đi
//             setTimeout(() => {
//                 mainImage.src = imgSrc; // Đổi sang ảnh mới
//                 mainImage.style.transform = 'translateX(-100%)'; // Đưa ảnh mới từ trái vào
//                 setTimeout(() => {
//                     mainImage.style.transform = 'translateX(0)'; // Đưa ảnh về vị trí trung tâm
//                     mainImage.style.opacity = '1'; // Hiển thị ảnh mới
//                 }, 50); // Delay nhỏ để ảnh mới bắt đầu trượt
//             }, 500); // Thời gian chờ khớp với hiệu ứng (0.5 giây)
//         });
//     });
// });
