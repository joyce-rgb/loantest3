const DECISION_TREE = {
    'START': {
        title: '基本門檻檢測',
        question: 'Q1：公司是否已完成「公司登記」或「商業登記」，且有統一編號？',
        options: [{ label: '是', nextId: 'Q2' }, { label: '否', nextId: 'FAIL_Q1' }]
    },
    'FAIL_Q1': {
        type: 'RESULT', status: 'DANGER', title: '🛑 無法送件',
        content: '企業貸款的首要條件是合法登記。您需要先完成設立登記並取得統一編號後，才能申請相關融資。',
        tips: '若您尚未設立公司，推薦諮詢「雅喬 會計師」協助辦理：https://lin.ee/QHK6Cfi'
    },
    'Q2': {
        title: '基本門檻檢測',
        question: 'Q2：負責人是否年滿 18 歲且具備完全行為能力？',
        options: [{ label: '是', nextId: 'Q3' }, { label: '否', nextId: 'FAIL_Q2' }]
    },
    'FAIL_Q2': {
        type: 'RESULT', status: 'DANGER', title: '🛑 無法送件',
        content: '根據現行法律，未成年人無法擔任貸款之負責人。'
    },
    'Q3': {
        title: '基本門檻檢測',
        question: 'Q3：負責人及配偶、公司本身，近半年是否有「退票」、「欠稅」或「強制停卡」紀錄？',
        options: [{ label: '否', nextId: 'BRANCH_SELECT' }, { label: '是', nextId: 'FAIL_Q3' }]
    },
    'FAIL_Q3': {
        type: 'RESULT', status: 'DANGER', title: '🛑 極難過件',
        content: '信用瑕疵或欠稅是銀行的天條。銀行要求企業必須「完稅」才能受理貸款。',
        tips: '若您不確定是否有欠稅，請至稅務入口網申請「無欠稅證明」：https://www.etax.nat.gov.tw/etwmain/etw109w'
    },
    'BRANCH_SELECT': {
        title: '基本門檻檢測通過',
        question: '初步信用檢測合格！請選擇您的企業類別：',
        tips: '建議負責人可先申請「個人信用證明」以利銀行審核：https://tender.flybooking.io/check_credit_information/',
        options: [
            { label: '新創公司 (成立未滿 5~8 年)', nextId: 'Q4' },
            { label: '成熟企業 (成立滿 1 年以上)', nextId: 'Q8' }
        ]
    },
    'Q4': {
        title: 'PATH A：新創公司審核',
        question: 'Q4：負責人年齡是否在 18 ~ 45 歲之間？',
        options: [{ label: '是', nextId: 'Q5' }, { label: '否', nextId: 'Q8' }]
    },
    'Q5': {
        title: 'PATH A：新創公司審核',
        question: 'Q5：公司設立登記是否未滿 5 年？',
        options: [{ label: '是', nextId: 'Q6' }, { label: '否', nextId: 'Q8' }]
    },
    'Q6': {
        title: 'PATH A：新創公司審核',
        question: 'Q6：負責人是否已完成 20 小時政府認可的創業輔導課程？',
        options: [{ label: '是', nextId: 'Q7' }, { label: '否', nextId: 'FAIL_Q6' }]
    },
    'FAIL_Q6': {
        type: 'RESULT', status: 'WARNING', title: '🛑 暫停送件',
        content: '您必須先完成 20 小時的創業課程。',
        tips: '可至「中小企業網路大學校」進行線上學習：https://www.smelearning.org.tw/index_moeasmea.php'
    },
    'Q7': {
        title: 'PATH A：新創公司審核',
        question: 'Q7：負責人出資額是否佔公司實收資本額 20% 以上？',
        options: [{ label: '是', nextId: 'SUCCESS_A' }, { label: '否', nextId: 'FAIL_Q7' }]
    },
    'SUCCESS_A': {
        type: 'RESULT', status: 'SUCCESS', title: '🎉 符合「青年創業貸款」資格！',
        content: '恭喜！您的條件符合政府青創貸款標準。',
        tips: '準備資料：公司登記、納稅證明(401表)、近半年存摺。'
    },
    'Q8': {
        title: 'PATH B：成熟企業審核',
        question: 'Q8：公司成立時間是否滿 1 年？',
        options: [{ label: '是', nextId: 'Q9' }, { label: '否', nextId: 'FAIL_Q8' }]
    },
    'FAIL_Q8': {
        type: 'RESULT', status: 'WARNING', title: '⚠️ 難度較高',
        content: '建議改走青創貸款或優化財務報表。'
    },
    'Q9': {
        title: 'PATH B：成熟企業審核',
        question: 'Q9：近一年報稅年營收（401表）是否達 100 萬元以上？',
        options: [{ label: '是', nextId: 'Q10' }, { label: '否', nextId: 'FAIL_Q9' }]
    },
    'FAIL_Q9': {
        type: 'RESULT', status: 'WARNING', title: '⚠️ 銀行意願低',
        content: '營收太低，主流銀行承作意願極低。'
    },
    'Q10': {
        title: 'PATH B：成熟企業審核',
        question: 'Q10：公司是否依規定開立發票並繳稅？',
        options: [{ label: '是', nextId: 'Q11' }, { label: '否', nextId: 'FAIL_Q10' }]
    },
    'FAIL_Q10': {
        type: 'RESULT', status: 'DANGER', title: '🛑 無法送件',
        content: '無營收證明（發票/報稅表），銀行無法進行審核。',
        tips: '若有稅務疑問，推薦諮詢會計師：https://lin.ee/QHK6Cfi'
    },
    'Q11': {
        title: 'PATH B：成熟企業審核',
        question: 'Q11：實收資本額是否合理？',
        options: [{ label: '是', nextId: 'SUCCESS_B' }, { label: '否', nextId: 'FAIL_Q11' }]
    },
    'SUCCESS_B': {
        type: 'RESULT', status: 'SUCCESS', title: '🎉 符合「中小企業貸款」資格！',
        content: '您的企業條件穩定，適合申請營運週轉金。',
        tips: '準備資料：公司登記、納稅證明(401表)、近半年存摺。'
    }
};

export default function handler(req, res) {
    const { currentId, optionIndex } = req.query;
    let nextNodeId = 'START';
    if (currentId && optionIndex !== undefined) {
        const currentNode = DECISION_TREE[currentId];
        if (currentNode && currentNode.options && currentNode.options[optionIndex]) {
            nextNodeId = currentNode.options[optionIndex].nextId;
        }
    } else if (currentId) {
        nextNodeId = currentId;
    }
    const nextNode = DECISION_TREE[nextNodeId];
    if (!nextNode) return res.status(404).json({ error: 'Node error' });

    const externalLinks = [];
    if (nextNode.tips) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urls = nextNode.tips.match(urlRegex);
        if (urls) {
            urls.forEach(url => {
                let label = '了解詳情';
                if (url.includes('lin.ee')) label = '💬 諮詢雅喬會計師';
                if (url.includes('smelearning')) label = '📚 前往創業課程';
                if (url.includes('flybooking')) label = '📜 申請個人信用證明';
                if (url.includes('etax.nat.gov.tw')) label = '🧾 申請無欠稅證明'; 
                externalLinks.push({ label, url });
            });
        }
    }

    res.status(200).json({
        id: nextNodeId,
        type: nextNode.type || 'QUESTION',
        title: nextNode.title,
        question: nextNode.question,
        content: nextNode.content,
        status: nextNode.status,
        tips: nextNode.tips ? nextNode.tips.replace(/(https?:\/\/[^\s]+)/g, '').trim() : '',
        options: nextNode.options ? nextNode.options.map(opt => ({ label: opt.label })) : [],
        externalLinks
    });
}
