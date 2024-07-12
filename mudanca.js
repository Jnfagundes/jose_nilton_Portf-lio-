
const checkbox = document.getElementById('checkbox');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('clean-mode');
            } else {
                document.body.classList.remove('clean-mode');
            }
        });