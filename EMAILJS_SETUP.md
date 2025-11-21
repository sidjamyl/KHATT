# Configuration EmailJS - Guide Complet

Ce guide vous explique comment configurer EmailJS pour recevoir les demandes de cartes par email sur **nj_sid@esi.dz**.

## 📧 Étapes de Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** (ou **"Start for free"**)
3. Créez votre compte (gratuit jusqu'à 200 emails/mois)

### 2. Configurer votre Service Email

1. Une fois connecté, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé pour les comptes personnels)
   - **Outlook**
   - Ou autre service de votre choix
4. Connectez votre compte email **nj_sid@esi.dz**
5. Notez votre **Service ID** (ex: `service_abc1234`)

### 3. Créer un Template d'Email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template comme suit :

#### Configuration du Template :

**To Email:** 
```
{{to_email}}
```

**Subject Line:**
```
🎴 Nouvelle demande de carte - {{from_name}}
```

**Content (Body):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #F06A2A 0%, #ff8c42 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #F06A2A; }
        .label { font-weight: bold; color: #F06A2A; }
        .value { margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎴 Nouvelle Demande de Carte</h2>
        </div>
        <div class="content">
            <p>Vous avez reçu une nouvelle demande de carte personnalisée :</p>
            
            <div class="field">
                <div class="label">👤 Nom Complet</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">📱 Téléphone</div>
                <div class="value">{{phone_number}}</div>
            </div>
            
            <div class="field">
                <div class="label">📍 Adresse</div>
                <div class="value">{{address}}</div>
            </div>
            
            <div class="field">
                <div class="label">🏢 Nom de l'Entreprise</div>
                <div class="value">{{business_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">🔗 Réseau Social</div>
                <div class="value">{{social_media}}</div>
            </div>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            
            <div class="field">
                <div class="label">📝 Message Complet</div>
                <div class="value" style="white-space: pre-line;">{{message}}</div>
            </div>
        </div>
    </div>
</body>
</html>
```

4. Cliquez sur **"Save"**
5. Notez votre **Template ID** (ex: `template_xyz5678`)

### 4. Obtenir votre Public Key

1. Allez dans **"Account"** (icône utilisateur en haut à droite)
2. Cliquez sur **"API Keys"** dans le menu
3. Copiez votre **Public Key** (ex: `abcdefghijk123456`)

### 5. Configurer le fichier .env.local

Ouvrez le fichier `.env.local` à la racine de votre projet et remplacez les valeurs :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijk123456
```

### 6. Redémarrer le serveur de développement

```bash
npm run dev
```

## ✅ Test du Formulaire

1. Ouvrez votre site
2. Cliquez sur le bouton **"Get Your Card"**
3. Remplissez le formulaire
4. Cliquez sur **"Submit Request"**
5. Vérifiez votre boîte mail **nj_sid@esi.dz**

## 🎯 Variables du Template

Les variables suivantes sont envoyées par le formulaire :

- `{{to_email}}` - Email de réception (nj_sid@esi.dz)
- `{{from_name}}` - Nom complet de l'utilisateur
- `{{from_email}}` - Email de l'utilisateur
- `{{phone_number}}` - Numéro de téléphone
- `{{address}}` - Adresse
- `{{business_name}}` - Nom de l'entreprise
- `{{social_media}}` - Lien réseau social
- `{{message}}` - Message formaté complet

## 🔒 Sécurité

- ✅ Les clés publiques EmailJS sont sécurisées pour une utilisation côté client
- ✅ EmailJS protège automatiquement contre le spam
- ✅ Limite de 200 emails/mois sur le plan gratuit
- ✅ Possibilité de passer à un plan payant pour plus de volume

## 📊 Plan Gratuit EmailJS

- **200 emails/mois** gratuits
- Authentification sécurisée
- Templates illimités
- Support de multiples services email

## 🆘 Dépannage

### Le formulaire ne s'envoie pas
1. Vérifiez que les 3 clés sont correctement configurées dans `.env.local`
2. Vérifiez que le serveur Next.js a été redémarré après modification du `.env.local`
3. Ouvrez la console du navigateur pour voir les erreurs

### L'email n'arrive pas
1. Vérifiez votre dossier spam
2. Vérifiez que le service EmailJS est bien connecté à **nj_sid@esi.dz**
3. Vérifiez les logs dans le dashboard EmailJS

### Variables manquantes dans l'email
1. Vérifiez que les noms de variables correspondent exactement dans le template
2. Les noms sont sensibles à la casse (ex: `from_name` ≠ `From_Name`)

## 🎉 Vous êtes prêt !

Une fois configuré, chaque demande de carte sera automatiquement envoyée par email à **nj_sid@esi.dz** avec toutes les informations du client.

---

**Besoin d'aide ?** Consultez la documentation officielle : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
