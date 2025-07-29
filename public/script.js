document.getElementById('travelForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const budget = document.getElementById('budget').value;
    const days = document.getElementById('days').value;
    const location = document.getElementById('location').value;
    
    if (!budget || !days || !location) {
        showError('Please fill in all fields');
        return;
    }
    
    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('generateBtn').disabled = true;
    
    try {
        const response = await fetch('/generate-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ budget, days, location })
        });
        
        const data = await response.json();
        
        if (data.success) {
            displayResult(data);
        } else {
            showError(data.error || 'Failed to generate travel plan');
        }
    } catch (error) {
        showError('Network error. Please try again.');
        console.error('Error:', error);
    } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('generateBtn').disabled = false;
    }
});

function displayResult(data) {
    document.getElementById('resultTitle').textContent = `Trip to ${data.location}`;
    document.getElementById('resultBudget').textContent = `₹${data.budget}`;
    document.getElementById('resultDays').textContent = `${data.days} days`;
    document.getElementById('resultLocation').textContent = data.location;
    document.getElementById('travelPlan').textContent = data.travelPlan;
    
    const imageElement = document.getElementById('destinationImage');
    if (data.imageUrl) {
        imageElement.src = data.imageUrl;
        imageElement.style.display = 'block';
    } else {
        imageElement.style.display = 'none';
    }
    
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    
    const formSection = document.querySelector('.form-section');
    formSection.insertBefore(errorDiv, formSection.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function resetForm() {
    document.getElementById('travelForm').reset();
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
}