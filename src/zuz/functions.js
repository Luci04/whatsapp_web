// Generate Random Id in 'abcd-efgh-ijkl-mnop' format

const genderateID = (len, k) => {
    const s = (k) => {
        var text = "", possible = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < k; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
    var id = s(k);
    if (len > 1) {
        for (let n = 0; n < len; n++) {
            id += "-" + s(k);
        }
    }

    return id;
}

// Toasts / Notification

const ZuzToast = function () {
    let self = this;
    self._toasts = [];
    self._container = null;
    const _defaults = {
        message: "Fancy Toast",
        timeLeft: 4
    }

    const _Toast = (options) => {
        var tout = null,
            ID = 'zuz-toast-' + genderateID(5, 4),
            toast = document.createElement('div'),
            btn = document.createElement('button');

        toast.id = ID;
        toast.classList = 'zuz-toast fixed flex fontn anim s14 aic';
        toast.innerHTML = options.html || _defaults.message;

        btn.className = 'fontn s14';
        btn.textContent = options.btnTxt || 'OK';
        btn.addEventListener('click', () => { _dismiss() });

        toast.appendChild(btn);

        self._container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('zuz-toast-visible')
            self.arrangeToast(() => {
                tout = setTimeout(() => { }, (options.time || _defaults.timeLeft * 1000));
            })
        }, 50);

        const _dismiss = () => {
            tout && clearTimeout(tout);
            toast.classList.remove('zuz-toast-hidden')
            toast.classList.remove('zuz-toast-visible')
            setTimeout(() => {
                document.getElementById(ID).parentNode.removeChild(document.getElementById(ID));
            }, 1000);
        }
    }

    self.moveToast = (toast, bottom) => {
        toast.style.bottom = bottom + "px";
    }

    self.arrangeToast = (callback) => {
        var toasts = document.getElementsByClassName('zuz-toast'),
            bottom = 20, i = toasts.length;
        while (i--) {
            toasts[i].classList.add('n-' + i);
            self.moveToast(toasts[i], bottom);
            bottom += parseInt(getComputedStyle(toasts[i]).height.replace("px", "")) + 30;
        }
        callback && callback();
    }

    self.createContainer = () => {
        var container = document.createElement('div');
        container.setAttribute('id', 'toast-container');
        document.body.appendChild(container);
        self._container = container;
    }

    self.show = (options) => {
        self._container == null && self.createContainer();
        _Toast(options);
    }

    self._dismissAll = () => {
        var toasts = document.querySelectorAll('.zuz-toast'),
            i = toasts.length;
        while (i--) {
            toasts[i].parentNode.removeChild(toasts[i]);
        }
    }
}
const Toast = new ZuzToast();

export default {
    genderateID,
    Toast
}